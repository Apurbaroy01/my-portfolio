import { motion } from "motion/react"
import profile from '../assets/profile.jpg'
const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-transparent text-center">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-6xl font-bold mb-4 text-primary">About Me</h2>
      <p className="text-white max-w-2xl mx-auto text-lg">
        I am a passionate React developer with a strong focus on building clean, modern, and responsive web applications using React, TailwindCSS, and modern web tools.
      </p>

      <section className="min-h-screen bg-transparent text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10">
        {/* Left Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-green-700 uppercase">Who I am?</h2>
          <p className="text-lg leading-relaxed">
            My name is <strong>Apurba roy</strong>. I am a professional and enthusiastic front-end developer with a passion for crafting dynamic and responsive web applications. I pride myself on being a quick learner with a strong self-learning attitude. Exploring new technologies and solving complex problems are my driving forces.
          </p>
        </div>

        {/* Right Image with Badge */}
        <motion.div  className="relative md:w-1/2 flex justify-center hover:scale-105 transition-transform duration-300 shadow-3xl">
          <img
            src={profile}
            alt="Apurba-roy"
            className="rounded-2xl max-w-sm shadow-3xl object-cover border-2 p-5"
          />

    
        </motion.div>
      </section>
    </section>
  );
};

export default About;