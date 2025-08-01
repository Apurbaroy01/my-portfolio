import { FaGraduationCap } from "react-icons/fa";
import Lottie from "lottie-react";
import education from "../assets/Books stack.json"; // Your Lottie animation
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Complete Web Development Course",
    duration: "2025 - 2025",
    institution: "Programming Hero",
  },
  {
    title: "Diploma in Computer Engineering",
    duration: "2022 - 2025",
    institution: "Mangrove Institute of Science and Technology",
  },
  {
    title: "Secondary School Certificate",
    duration: "2020 - 2021",
    institution: "Rajapur Adsha High School",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  }),
};

const EducationSection = () => {
  return (
    <section className="py-20 px-6 md:px-20  text-white">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-6xl font-bold mb-2">
          Education
        </h2>
        <p className="text-gray-400 text-lg">My Academic Journey</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-60 max-w-md">
            <Lottie animationData={education} loop />
          </div>
        </motion.div>

        {/* Right - Education Timeline */}
        <div className="flex flex-col gap-6 p-5">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative border border-purple-500/30 rounded-xl  p-6 bg-gradient-to-br from-[#1e293b] to-[#111827] shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -left-4 top-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-md">
                <FaGraduationCap size={16} />
              </div>
              <h3 className="text-xl font-semibold mb-1 ml-6">{item.title}</h3>
              <span className="text-sm text-gray-400 ml-6">{item.duration}</span>
              <p className="text-gray-300 text-sm mt-1 ml-6">{item.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
