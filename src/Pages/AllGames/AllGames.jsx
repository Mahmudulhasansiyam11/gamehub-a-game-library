import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import PopularSection from "../../Components/PopularSection/PopularSection";

const AllGames = () => {
  const gameData = useLoaderData();
  //  console.log(gameData); 

  useEffect(() => {
      document.title = "All Games";
    }, []);

  //   Execute sort functionality

  const [sort, setSort] = useState([]);

  useEffect(() => {
    setSort(gameData);
  }, [gameData]);

  const handleAscendingByRating = () => {
    const sortByAscending = [...sort].sort((a, b) => a.ratings - b.ratings);
    setSort(sortByAscending);
  };

  const handleDescendingByRating = () => {
    const sortByDescending = [...sort].sort((a, b) => b.ratings - a.ratings);
    setSort(sortByDescending);
  };

  return (
    <div className="my-5 w-11/12 mx-auto">
      <div className="flex justify-between items-center">
        <h3 className="text-white">Total Games: {gameData.length}</h3>
        <div>
          <div className="dropdown dropdown-bottom dropdown-center">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-[linear-gradient(to_right,#00F260,#0575E6)] btn-outline tracking-wide transition-transform transform hover:scale-105"
            >
              Sort By
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={handleAscendingByRating}>Ascending Order</a>
              </li>
              <li>
                <a onClick={handleDescendingByRating}>Descending Order</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 md:p-10  text-white">
        {sort.map((game) => (
          <PopularSection key={game.id} game={game}></PopularSection>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <Link to="/" className="btn btn-secondary w-full sm:w-auto px-8 font-semibold btn-outline tracking-wide transition-transform transform hover:scale-105">Back to Home</Link>
      </div>
    </div>
  );
};

export default AllGames;
