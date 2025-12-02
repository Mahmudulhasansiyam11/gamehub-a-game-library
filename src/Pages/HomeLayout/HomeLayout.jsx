import React, { useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import PopularSection from "../../Components/PopularSection/PopularSection";
import { Link, useLoaderData } from "react-router";
import NewsletterSection from "../../Components/NewsletterSection/NewsletterSection";
import WhyChooseGameHub from "../../Components/WhyChooseGameHub/WhyChooseGameHub";

const HomeLayout = () => {
  const gameData = useLoaderData();

  useEffect(() => {
    document.title = "Home";
  }, []);

  // Filter only popular games
  const popularGames = gameData
    .filter((game) => game.popular === true)
    .sort((a, b) => b.ratings - a.ratings);

  // Get first 3 popular games
  const topThreePopular = popularGames.slice(0, 3);

  return (
    <div>
      {/* Banner Section */}
      <Banner />

      {/* Popular Game Section */}
      <div className="w-11/12 mx-auto">
        <p className="mt-10 text-white text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-2 px-2">
          Popular Games
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 md:p-10 text-white">
          {topThreePopular.map((game) => (
            <PopularSection key={game.id} game={game} />
          ))}
        </div>

        <div className="flex justify-center items-center">
          <Link
            to="/allGames"
            className="btn border-0 bg-[linear-gradient(to_right,#FF3A3A,#5B5BFF)] text-white btn-outline tracking-wide transition-transform transform hover:scale-105"
          >
            All Games
          </Link>
        </div>
      </div>

      {/* Why Choose GameHub Section */}
      <section className="w-11/12 mx-auto mt-20 text-white">
       <WhyChooseGameHub></WhyChooseGameHub>
      </section>

      {/* Community Reviews Section */}
      <section className="w-11/12 mx-auto mt-20 mb-16 text-white">
        <h2 className="text-center text-3xl font-bold mb-6">
          What Gamers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {/* Review 1 */}
          <div className="bg-[#181B31] p-6 rounded-xl shadow-lg border border-[#2A2F4A]">
            <p className="text-gray-300 italic">
              "GameHub helped me discover some of the best indie games ever! The UI is super clean."
            </p>
            <h4 className="mt-4 font-semibold text-blue-300">— Alex Parker</h4>
          </div>

          {/* Review 2 */}
          <div className="bg-[#181B31] p-6 rounded-xl shadow-lg border border-[#2A2F4A]">
            <p className="text-gray-300 italic">
              "As a developer, I love how easy it is to get feedback from real gamers."
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
      </section>

      {/* Newsletter Section */}
      <div className="w-11/12 mx-auto mt-10 sm:mt-12">
        <NewsletterSection />
      </div>
    </div>
  );
};

export default HomeLayout;
