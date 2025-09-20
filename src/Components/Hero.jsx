import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Lottie from "lottie-react";
import devoloper from '../assets/developer.json';
import Typewriter from "react-ts-typewriter";

const Hero = () => {
  return (
    <div className="min-h-screen text-white grid grid-cols-1 md:grid-cols-2 items-center px-20 md:px-20 py-16 gap-10 mt-5">
      {/* Left Section */}
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="block" data-aos="fade-right">APURBA-ROY</span>

          <span  className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500" data-aos="fade-left" >
            MERN Stack Developer
          </span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
          <Typewriter text="I build clean, fast, and accessible web applications with seamless user experiences." />
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          {['React', 'JavaScript', 'Node.js', 'Tailwind'].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gradient-to-r from-[#312e81] to-[#1e3a8a] rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform duration-300"
              data-aos="fade-down"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex flex-row text-xs sm:flex-row justify-center md:justify-start gap-4 pt-4"data-aos="fade-up">
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white px-5 py-2 rounded-lg shadow-lg font-medium transition-all text-center"
          >
            Projects ↗
          </a>
          <a
            href="#contact"
            className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-[#0f051d] transition-all text-center"
          >
            Contact ✉
          </a>
        </div>

        <div className="flex justify-center md:justify-start gap-6 text-2xl pt-6" data-aos="fade-right">
          <a
            href="https://github.com/Apurbaroy01"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition shadow-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/apurba-roy01"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition shadow-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/apurbaroy02/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition shadow-2xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right Section - Lottie Animation */}
      <div className="flex justify-center md:justify-end"data-aos="zoom-in-up">
        <div className="max-w-xs sm:max-w-sm md:max-w-md w-full drop-shadow-2xl">
          <Lottie animationData={devoloper} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
