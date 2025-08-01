import { FaReact, FaJs, FaNode, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#0f051d] text-white grid md:grid-cols-2 items-center px-6 md:px-20 py-10 relative">
      {/* Left Section */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          APURBA-ROY
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            MERN stack Developer
          </span>
        </h1>
        <p className="text-gray-400 text-lg">Creating Innovative, Functional, and User-Friendly Websites for Digital Solutions.</p>

        <div className="flex flex-wrap gap-4">
          <span className="badge badge-outline text-white">React</span>
          <span className="badge badge-outline text-white">Javascript</span>
          <span className="badge badge-outline text-white">Node.js</span>
          <span className="badge badge-outline text-white">Tailwind</span>
        </div>

        <div className="flex gap-4">
          <a href="#projects" className="btn btn-outline btn-info">Projects ↗</a>
          <a href="#contact" className="btn btn-outline">Contact ✉</a>
        </div>

        <div className="flex gap-6 text-xl pt-6">
          <a href="https://github.com" target="_blank" className="hover:text-purple-400"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-purple-400"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" className="hover:text-purple-400"><FaInstagram /></a>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:flex justify-end">
        <img
          src="/your-path-to-image.png"
          alt="MERN Developer Illustration"
          className="max-w-md animate-fade-in"
        />
      </div>
    </div>
  );
};

export default Hero;
