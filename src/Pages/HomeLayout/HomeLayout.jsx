import React, { useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import PopularSection from "../../Components/PopularSection/PopularSection";
import { Link, useLoaderData } from "react-router";
import NewsletterSection from "../../Components/NewsletterSection/NewsletterSection";

const HomeLayout = () => {
  const gameData = useLoaderData();
  // console.log(gameData);

  useEffect(() => {
    document.title = "Home";
  }, []);

  // Filter only popular games
  const popularGames = gameData
    .filter((game) => game.popular === true)
    .sort((a, b) => b.ratings - a.ratings);
  //   console.log(popularGames);

  // Get first 3 popular games
  const topThreePopular = popularGames.slice(0, 3);
  // console.log(topThreePopular);

  return (
    <div>
      {/* Banner Section */}
      <Banner></Banner>
      {/* Popular Game Section */}
      <div className="w-11/12 mx-auto">
        {/*  */}
        <p className="mt-10 text-white text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-2 px-2 ">
          Popular Games
        </p>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 md:p-10  text-white">
          {topThreePopular.map((game) => (
            <PopularSection key={game.id} game={game}></PopularSection>
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

      {/* NewsLetter Section */}
      <div className="mt-10 sm:mt-12">
        <NewsletterSection></NewsletterSection>
      </div>
    </div>
  );
};

export default HomeLayout;
