import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent text-white border-b border-gray-700 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          APURBA-ROY
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex menu menu-horizontal gap-6 text-lg font-medium">
          <li><a href="#" className="text-purple-400 border-b-2 border-purple-400">Home</a></li>
          <li><a href="#about" className="hover:text-purple-300">About</a></li>
          <li><a href="#projects" className="hover:text-purple-300">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-purple-300">Contact</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-80 px-6 pt-4 pb-6">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li><a href="#" onClick={toggleMenu} className="text-purple-400 border-b-2 border-purple-400">Home</a></li>
            <li><a href="#about" onClick={toggleMenu} className="hover:text-purple-300">About</a></li>
            <li><a href="#projects" onClick={toggleMenu} className="hover:text-purple-300">Portfolio</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="hover:text-purple-300">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
