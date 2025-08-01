import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent text-white border-b border-gray-700 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            APURBA-ROY
          </h1>
        </div>
        <ul className="menu menu-horizontal flex gap-4">
          <li><a href="#" className="text-purple-400 border-b-2 border-purple-400">Home</a></li>
          <li><a href="#about" className="hover:text-purple-300">About</a></li>
          <li><a href="#projects" className="hover:text-purple-300">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-purple-300">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;