import React, { useState } from "react";

import project2 from "../assets/projects/project.png";
import project1 from "../assets/projects/project1.png";
import project3 from "../assets/projects/project2.png";

const Projects = () => {
  const allProjects = [
    {
      title: "Coffee Shop",
      description: "My personal portfolio built using React and Tailwind.",
      image: project1,
      link: "https://coffee-client.web.app/",
    },
    {
      title: "Coffee Shop admin",
      description: "A simple todo app with full CRUD features.",
      image: project2,
      link: "https://coffee-shop-admin.web.app/",
    },
    {
      title: "Law-Student",
      description: "An online shopping platform with cart and checkout.",
      image: project3,
      link: "https://civiladmin.netlify.app/",
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

  return (
    <section id="projects" className="py-16 px-8 sm:px-6 md:px-12 lg:px-20 bg-transparent text-white">
      {/* Title */}
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-10 p-5" data-aos="fade-up">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-15">
        {visibleProjects.map((project, index) => (
          <div
            data-aos="fade-left"
            key={index}
            className="rounded-xl overflow-hidden shadow-lg bg-[#1e293b] hover:shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
              <div className="pt-2">
                <a
                  data-aos="fade-up"
                  href={project.link}
                  className="text-base sm:text-lg inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-2 rounded-md font-medium shadow hover:opacity-90 transition"
                >
                  View Project ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showMore && (
        <div className="flex justify-center mt-10">
          <button
            data-aos="fade-down"
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
