import React, { useState } from "react";

const countryRates = {
  Sweden: 7.35,
  China: 11.53,
  Brazil: 15.63,
  Australia: 50.09,
};

const AddBox = ({ onSave }) => {
  const [receiver, setReceiver] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("rgb(255, 255, 255)");
  const [destination, setDestination] = useState("Sweden");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleColorChange = (e) => {
    const hex = e.target.value;
    const rgb = hexToRgb(hex);
    setColor(rgb);
  };

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleSave = () => {
    if (!receiver || weight === "" || !color || !destination) {
      setError("All fields are required.");
      return;
    }
    if (weight < 0) {
      setError("Weight cannot be negative.");
      setWeight(0);
      return;
    }
    setError("");
    const shippingCost = weight * countryRates[destination];
    onSave({ receiver, weight, color, destination, shippingCost });
    setReceiver("");
    setWeight("");
    setColor("rgb(255, 255, 255)");
    setDestination("Sweden");
    setSuccessMessage("Box data saved successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="flex justify-center items-center h-150">
      <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
        <h2 className="text-2xl mb-4 text-center font-semibold">Add Box</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
        <input
          className="border p-2 w-full mb-6 rounded"
          type="text"
          placeholder="Receiver Name"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-6 rounded"
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <div className="flex items-center mb-6">
          <input
            className="border p-2 rounded"
            type="color"
            onChange={handleColorChange}
          />
          <div className="w-6 h-6 ml-2 rounded-full border" style={{ backgroundColor: color }}></div>
          <span className="ml-2">{color}</span>
        </div>
        <select
          className="border p-2 w-full mb-6 rounded"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          {Object.keys(countryRates).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <button
          className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddBox;
