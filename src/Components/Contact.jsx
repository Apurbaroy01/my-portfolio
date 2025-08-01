
const Contact = () => {
  return (
    <section className="py-16 px-6 bg-base-100 text-center">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-6xl font-bold mb-4 text-primary  text-primary">Contact Me</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Name" className="input input-bordered w-full" required />
        <input type="email" placeholder="Email" className="input input-bordered w-full" required />
        <textarea className="textarea textarea-bordered w-full" placeholder="Message" rows="4" required></textarea>
        <button className="btn btn-primary w-full">Send Message</button>
      </form>
      <div className="mt-8 flex justify-center gap-6">
        <a href="https://github.com" className="link text-primary">GitHub</a>
        <a href="https://linkedin.com" className="link text-primary">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;