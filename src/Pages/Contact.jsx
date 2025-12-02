import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <section className="min-h-screen px-6 py-20 text-white bg-[#0A0B36]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
          Contact Us
        </h2>
        <p className="text-gray-300 mt-4">
          Have questions or need help? Send us a message anytime.
        </p>

        <form className="mt-12 bg-[#111427] p-8 rounded-xl shadow-xl border border-[#2A2F4A]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full bg-[#1A1F3C] text-gray-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full bg-[#1A1F3C] text-gray-200"
            />
          </div>

          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full bg-[#1A1F3C] text-gray-200 mt-6 h-32"
          ></textarea>

          <button className="mt-6 w-full btn border-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
