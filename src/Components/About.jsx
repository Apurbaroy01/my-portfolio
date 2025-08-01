import { motion } from "framer-motion"; // Make sure it's from "framer-motion"
import profile from '../assets/profile.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-transparent text-center">
      <motion.h2
        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-6xl font-bold mb-4"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        custom={1}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-white max-w-2xl mx-auto text-lg"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        custom={2}
        viewport={{ once: true }}
      >
        I am a passionate React developer with a strong focus on building clean, modern, and responsive web applications using React, TailwindCSS, and modern web tools.
      </motion.p>

      <section className="min-h-screen bg-transparent text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10">
        {/* Left Text */}
        <motion.div
          className="md:w-1/2 space-y-6 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          custom={3}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-green-700 uppercase">Who I am?</h2>
          <p className="text-lg leading-relaxed">
            My name is <strong>Apurba Roy</strong>. I am a professional and enthusiastic front-end developer with a passion for crafting dynamic and responsive web applications. I pride myself on being a quick learner with a strong self-learning attitude. Exploring new technologies and solving complex problems are my driving forces.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl backdrop-blur-md "
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
        >
          <img
            src={profile}
            alt="Apurba Roy"
            className="rounded-2xl max-w-sm object-cover w-auto  shadow-2xl "
          />
        </motion.div>
      </section>
    </section>
  );
};

export default About;
