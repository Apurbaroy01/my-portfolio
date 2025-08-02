import { motion } from "framer-motion";
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const Skills = () => {
  return (
    <section className="bg-transparent text-white py-16 px-6 md:px-20">
      <motion.h2
        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-6xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        What I Can Do?
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 border-2 p-5 rounded-2xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-[#1e293b] p-4 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-md"
            variants={itemVariants}
          >
            <img src={skill.icon} alt={skill.name} className="w-14 h-14 mb-3" />
            <p className="text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
