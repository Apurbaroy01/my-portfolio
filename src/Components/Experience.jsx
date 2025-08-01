import React from "react";

const Experience = () => {
  return (
    <section className="py-16 px-6 bg-base-200">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-6xl font-bold  text-primary  text-center mb-10 text-primary">Experience</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold">Frontend Developer</h3>
          <p className="text-gray-600">Freelance (2023 - Present)</p>
          <p className="mt-2">Worked on multiple React projects including admin dashboards, portfolios, and REST API integrations.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;