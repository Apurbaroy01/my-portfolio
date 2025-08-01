import { motion } from "framer-motion";
import React, { useState } from "react";

const Projects = () => {
  const allProjects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio built using React and Tailwind.",
      image: "https://via.placeholder.com/400x200",
      link: "#",
    },
    {
      title: "Todo App",
      description: "A simple todo app with full CRUD features.",
      image: "https://via.placeholder.com/400x200",
      link: "#",
    },
    {
      title: "E-commerce App",
      description: "An online shopping platform with cart and checkout.",
      image: "https://via.placeholder.com/400x200",
      link: "#",
    },
    {
      title: "Blog Platform",
      description: "A blog site built with markdown support.",
      image: "https://via.placeholder.com/400x200",
      link: "#",
    },
    {
      title: "Chat App",
      description: "Real-time chat application using Socket.io.",
      image: "https://via.placeholder.com/400x200",
      link: "#",
    },
    {
      title: "Weather App",
      description: "Displays real-time weather using OpenWeatherMap API.",
      image: "https://via.placeholder.com/400x200",
      link: "#",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);
  const visibleProjects = allProjects.slice(0, visibleCount);
  const showMore = visibleCount < allProjects.length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-transparent text-white">
      <motion.h2
        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg bg-[#1e293b] hover:shadow-2xl hover:scale-[1.02] transition duration-300"
            variants={cardVariants}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-300 text-base sm:text-lg">{project.description}</p>
              <div className="pt-2">
                <a
                  href={project.link}
                  className="text-base  sm:text-lg inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-2 rounded-md font-medium shadow hover:opacity-90 transition"
                >
                  View Project ↗
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {showMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="text-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Show More ↓
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
