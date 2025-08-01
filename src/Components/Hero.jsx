import { FaReact, FaJs, FaNode, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Lottie from "lottie-react";
import devoloper from '../assets/developer.json';
import { motion } from "framer-motion"; // ✅ make sure it's from "framer-motion"

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
  };

  return (
    <div className="min-h-screen text-white grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-20 py-16 gap-10">
      {/* Left Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="space-y-6 text-center md:text-left"
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight"
          variants={fadeInUp}
          custom={1}
        >
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, duration: 1.5 }}
            className="block"
          >
            APURBA-ROY
          </motion.span>

          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
          >
            MERN Stack Developer
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0"
          variants={fadeInUp}
          custom={2}
        >
          I build clean, fast, and accessible web applications with seamless user experiences.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-3"
          variants={fadeInUp}
          custom={3}
        >
          {['React', 'JavaScript', 'Node.js', 'Tailwind'].map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-gradient-to-r from-[#312e81] to-[#1e3a8a] rounded-full text-sm font-medium shadow-md"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-row text-xl sm:flex-row justify-center md:justify-start gap-4 pt-4"
          variants={fadeInUp}
          custom={4}
        >
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
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-start gap-6 text-2xl pt-6"
          variants={fadeInUp}
          custom={5}
        >
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaInstagram />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Section - Lottie Animation */}
      <motion.div
        className="flex justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
      >
        <div className="max-w-xs sm:max-w-sm md:max-w-md w-full drop-shadow-2xl">
          <Lottie animationData={devoloper} />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
