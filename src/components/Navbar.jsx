import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-around shadow-lg">
      <Link to="/add-box" className="text-lg hover:underline">
        Add Box
      </Link>
      <Link to="/box-list" className="text-lg hover:underline">
        Box List
      </Link>
    </nav>
  );
};

export default Navbar;
