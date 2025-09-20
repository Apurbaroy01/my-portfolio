import profile from "../assets/profile.jpg";


const About = () => {
  

  return (
    <section id="about" className="py-16 px-6 bg-transparent text-center">
      {/* Title */}
      <h2
        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-4xl md:text-6xl font-bold mb-4"
        data-aos="fade-up"
      >
        About Me
      </h2>

      {/* Short Intro */}
      <p
        className="text-white max-w-2xl mx-auto text-xs md:text-lg  px-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        I am a passionate React developer with a strong focus on building clean,
        modern, and responsive web applications using React, TailwindCSS, and
        modern web tools.
      </p>

      {/* Main Section */}
      <section className="min-h-screen bg-transparent text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10">
        {/* Left Text */}
        <div
          className="md:w-1/2 space-y-6 text-center md:text-left px-10"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-green-700 uppercase">
            Who I am?
          </h2>
          <p className="text-xs md:text-lg leading-relaxed ">
            My name is <strong>Apurba Roy</strong>. I am a professional and
            enthusiastic front-end developer with a passion for crafting dynamic
            and responsive web applications. I pride myself on being a quick
            learner with a strong self-learning attitude. Exploring new
            technologies and solving complex problems are my driving forces.
          </p>
        </div>

        {/* Right Image */}
        <div
          className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl backdrop-blur-md"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <img
            src={profile}
            alt="Apurba Roy"
            className="rounded-2xl max-w-sm object-cover w-80 shadow-2xl"
          />
        </div>
      </section>
    </section>
  );
};

export default About;
