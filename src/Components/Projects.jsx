import React from "react";

const Projects = () => {
  const projects = [
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
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-base-100">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-6xl font-bold  text-primary  text-center mb-10 text-primary">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="card w-full bg-base-200 shadow-xl">
            <figure>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <div className="card-actions justify-end">
                <a href={project.link} className="btn btn-primary">View</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;