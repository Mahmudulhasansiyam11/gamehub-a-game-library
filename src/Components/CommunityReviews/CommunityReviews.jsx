import React from "react";

const CommunityReviews = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold mb-6">What Gamers Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {/* Review 1 */}
        <div className="bg-[#181B31] p-6 rounded-xl shadow-lg border border-[#2A2F4A]">
          <p className="text-gray-300 italic">
            "GameHub helped me discover some of the best indie games ever! The
            UI is super clean."
          </p>
          <h4 className="mt-4 font-semibold text-blue-300">— Alex Parker</h4>
        </div>

        {/* Review 2 */}
        <div className="bg-[#181B31] p-6 rounded-xl shadow-lg border border-[#2A2F4A]">
          <p className="text-gray-300 italic">
            "As a developer, I love how easy it is to get feedback from real
            gamers."
          </p>
          <h4 className="mt-4 font-semibold text-green-300">— Maya Dev</h4>
        </div>

        {/* Review 3 */}
        <div className="bg-[#181B31] p-6 rounded-xl shadow-lg border border-[#2A2F4A]">
          <p className="text-gray-300 italic">
            "This platform brings players and developers together beautifully."
          </p>
          <h4 className="mt-4 font-semibold text-pink-300">— Chris Wong</h4>
        </div>
      </div>
    </div>
  );
};

export default CommunityReviews;
