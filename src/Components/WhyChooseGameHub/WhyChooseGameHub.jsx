import React from "react";

const WhyChooseGameHub = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold mb-6">
        Why Choose{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          GameHub?
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {/* Card 1 */}
        <div className="bg-[#111427] p-8 rounded-xl border border-[#1F233E] hover:shadow-[0_0_25px_rgba(0,255,170,0.25)] transition duration-300">
          <h3 className="text-xl font-semibold mb-3 text-green-300">
            Explore Indie Gems
          </h3>
          <p className="text-gray-300">
            Find unique, creative, and innovative games from talented indie
            developers worldwide.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#111427] p-8 rounded-xl border border-[#1F233E] hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] transition duration-300">
          <h3 className="text-xl font-semibold mb-3 text-blue-300">
            Connect With Developers
          </h3>
          <p className="text-gray-300">
            Share feedback, support developers, and help shape the future of the
            games you love.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#111427] p-8 rounded-xl border border-[#1F233E] hover:shadow-[0_0_25px_rgba(255,99,132,0.25)] transition duration-300">
          <h3 className="text-xl font-semibold mb-3 text-pink-300">
            Easy Access & Installation
          </h3>
          <p className="text-gray-300">
            Access game details, watch trailers, and install games with a single
            click.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseGameHub;
