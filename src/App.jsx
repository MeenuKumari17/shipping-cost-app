import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddBox from "./components/AddBox";
import BoxList from "./components/BoxList";

const App = () => {
  const [boxes, setBoxes] = useState([]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/add-box" />} />
        <Route path="/add-box" element={<AddBox onSave={(box) => setBoxes([...boxes, box])} />} />
        <Route path="/box-list" element={<BoxList boxes={boxes} />} />
      </Routes>
    </Router>
  );
};

export default App;