import html from '../assets/icon/html.png'
import css from '../assets/icon/css.png'
import tailwindcss from '../assets/icon/tailwindcss.png'
import JavaScript from '../assets/icon/JavaScript.png'
import reactjs from '../assets/icon/reactjs.png'
import vite from '../assets/icon/vite.png'
import node from '../assets/icon/node.png'
import expressjs from '../assets/icon/expressjs.png'
import mongodb from '../assets/icon/mongodb.png'
import firebase from '../assets/icon/firebase.png'
import bootstrap from '../assets/icon/bootstrap.png'
import material from '../assets/icon/material.png'
import github from '../assets/icon/github.png'
import Vercel from '../assets/icon/Vercel.svg'
import Netlify from '../assets/icon/Netlify.svg'
import sweetalaet from '../assets/icon/sweetalaet.png'

// Sample skill data
const skills = [
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'Tailwind CSS', icon: tailwindcss },
  { name: 'JavaScript', icon: JavaScript },
  { name: 'React JS', icon: reactjs },
  { name: 'Vite', icon: vite },
  { name: 'Node JS', icon: node },
  { name: 'Express Js', icon: expressjs },
  { name: 'MongoDB', icon: mongodb },
  { name: 'Bootstrap', icon: bootstrap },
  { name: 'Git Hub', icon: github },
  { name: 'Firebase', icon: firebase },
  { name: 'Material UI', icon: material },
  { name: 'Vercel', icon: Vercel },
  { name: 'SweetAlert2', icon: sweetalaet },
  { name: 'Netlify', icon: Netlify },
];

const Skills = () => {
  return (
    <section className="bg-transparent text-white py-16 px-20 md:px-20">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-6xl font-bold text-center mb-6"data-aos="fade-up">
        Skills
      </h2>

      <h2 className="text-3xl font-bold text-center mb-10"data-aos="fade-down">
        What I Can Do?
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 border-2 p-5 rounded-2xl">
        {skills.map((skill, index) => (
          <div
            data-aos="flip-left"
            key={index}
            className="bg-[#1e293b] p-4 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-md"
          >
            <img src={skill.icon} alt={skill.name} className="w-14 h-14 mb-3" />
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
