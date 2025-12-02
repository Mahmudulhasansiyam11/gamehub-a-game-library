import React, { useEffect } from "react";

const Support = () => {
  useEffect(() => {
    document.title = "Support";
  }, []);

  return (
    <section className="min-h-screen px-6 py-20 text-white bg-[#0A0B36]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          Support Center
        </h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Find answers to common questions or reach out for help.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-14">
          <div className="bg-[#111427] p-8 rounded-xl shadow-xl border border-[#1F233E] hover:shadow-[0_0_20px_#F59E0B] transition">
            <h3 className="text-xl font-bold text-yellow-400">FAQ</h3>
            <p className="text-gray-300 mt-3">
              Browse frequently asked questions and get quick solutions.
            </p>
          </div>

          <div className="bg-[#111427] p-8 rounded-xl shadow-xl border border-[#1F233E] hover:shadow-[0_0_20px_#FB923C] transition">
            <h3 className="text-xl font-bold text-orange-400">Help & Feedback</h3>
            <p className="text-gray-300 mt-3">
              Contact our support team for any issues or suggestions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
