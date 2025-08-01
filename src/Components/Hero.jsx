import { FaReact, FaJs, FaNode, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Lottie from "lottie-react";
import devoloper from '../assets/developer.json';

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#0f051d] text-white grid md:grid-cols-2 items-center px-6 md:px-20 py-16">
      {/* Left Section */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="block">APURBA-ROY</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            MERN Stack Developer
          </span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl">
          I build clean, fast, and accessible web applications with seamless user experiences.
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-3">
          {['React', 'JavaScript', 'Node.js', 'Tailwind'].map(skill => (
            <span
              key={skill}
              className="px-3 py-1 bg-gradient-to-r from-[#312e81] to-[#1e3a8a] rounded-full text-sm font-medium shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white px-5 py-2 rounded-lg shadow-lg font-medium transition-all"
          >
            Projects ↗
          </a>
          <a
            href="#contact"
            className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-[#0f051d] transition-all"
          >
            Contact ✉
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl pt-6">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right Section - Lottie Animation */}
      <div className="hidden md:flex justify-end">
        <div className="max-w-md w-full drop-shadow-2xl">
          <Lottie animationData={devoloper}  />
        </div>
      </div>
    </div>
  );
};

export default Hero;
