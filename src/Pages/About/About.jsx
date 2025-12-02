import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <section className="min-h-screen px-6 py-20 text-white bg-[#0A0B36]">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          About GameHub
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          GameHub is a modern gaming discovery platform built to connect 
          <span className="text-blue-400 font-semibold"> gamers</span> with 
          <span className="text-green-400 font-semibold"> indie developers</span>.  
          We promote innovation, creativity, and fun by giving visibility to unique games.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-14">
          <div className="bg-[#111427] p-8 rounded-xl shadow-xl border border-[#1F233E] hover:shadow-[0_0_25px_#00F260] transition">
            <h3 className="text-2xl font-semibold text-green-300">Our Mission</h3>
            <p className="text-gray-300 mt-3">
              Empower developers and entertain gamers through a powerful & easy-to-use platform.
            </p>
          </div>

          <div className="bg-[#111427] p-8 rounded-xl shadow-xl border border-[#1F233E] hover:shadow-[0_0_25px_#5B5BFF] transition">
            <h3 className="text-2xl font-semibold text-blue-300">What We Offer</h3>
            <p className="text-gray-300 mt-3">
              Game details, reviews, installation access, and community-driven support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
