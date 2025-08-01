import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
    { name: "TailwindCSS", icon: <span className="text-sky-500 text-2xl">🌬️</span> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
  ];

  return (
    <section className="py-16 px-6 bg-base-200">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500  text-primary text-4xl font-bold text-center mb-10 text-primary">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
            {skill.icon}
            <p className="mt-2 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;