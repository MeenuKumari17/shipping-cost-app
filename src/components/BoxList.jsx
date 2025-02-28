import React from "react";

const BoxList = ({ boxes }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl mb-4 text-center font-semibold">Box List</h2>
      {boxes.length === 0 ? (
        <p className="text-center text-gray-500">No boxes added yet.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Receiver Name</th>
              <th className="border p-2">Weight (kg)</th>
              <th className="border p-2">Box Color</th>
              <th className="border p-2">Destination</th>
              <th className="border p-2">Shipping Cost (INR)</th>
            </tr>
          </thead>
          <tbody>
            {boxes.map((box, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{box.receiver}</td>
                <td className="border p-2">{box.weight}</td>
                <td className="border p-2 flex justify-center items-center">
                  <div
                    className="w-6 h-6 rounded-full border"
                    style={{ backgroundColor: box.color }}
                  ></div>
                  <span className="ml-2">{box.color}</span>
                </td>
                <td className="border p-2">{box.destination}</td>
                <td className="border p-2">{box.shippingCost.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BoxList;
