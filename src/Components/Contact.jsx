import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactInfo = [
  {
    icon: <MdEmail className="text-blue-500 text-3xl" />,
    title: "Email",
    value: "apurbaroy00011@gmail.com",
    link: "mailto:apurbaroy00011@gmail.com",
  },
  {
    icon: <MdPhone className="text-green-500 text-3xl" />,
    title: "Phone",
    value: "+880 1311 271610",
    link: "tel:+8801311271610",
  },
  {
    icon: <MdLocationOn className="text-purple-500 text-3xl" />,
    title: "Location",
    value: "Rajapur, Ramshill, Kotalipara, Bangladesh",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-16 md:px-20 bg-gradient-to-br bg-transparent text-white relative overflow-hidden"
    >
      {/* Title */}
      <h2 className="text-center pb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-4xl md:text-6xl font-bold"data-aos="slide-up">
        Get In Touch
      </h2>

      <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
        {/* Contact Cards */}
        <div className="w-full md:w-1/2 space-y-6" data-aos="zoom-in-down">
          <div className="space-y-6 bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl backdrop-blur-md">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/10 border border-white/10 rounded-2xl p-5 shadow-lg backdrop-blur-lg hover:scale-105 hover:border-white/20 transition-all"
              >
                <div className="bg-white/20 p-3 rounded-full shadow-inner">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-blue-300 hover:text-blue-500 text-sm break-words transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-sm">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl backdrop-blur-md"data-aos="zoom-in-up">
          <form className="space-y-6 text-xl">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 font-semibold bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
