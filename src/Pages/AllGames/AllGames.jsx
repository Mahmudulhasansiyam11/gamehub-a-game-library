

// import React, { useEffect, useState } from "react";
// import { Link, useLoaderData } from "react-router";
// import PopularSection from "../../Components/PopularSection/PopularSection";

// const AllGames = () => {
//   const gameData = useLoaderData();

//   useEffect(() => {
//     document.title = "All Games";
//   }, []);

//   const [displayGames, setDisplayGames] = useState([]);

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   useEffect(() => {
//     setDisplayGames(gameData);
//   }, [gameData]);

//   const categories = ["All", ...new Set(gameData.map((game) => game.category))];

//   // handle sort functionality
//   const handleAscendingByRating = () => {
//     const sorted = [...displayGames].sort((a, b) => a.ratings - b.ratings);
//     setDisplayGames(sorted);
//   };

//   const handleDescendingByRating = () => {
//     const sorted = [...displayGames].sort((a, b) => b.ratings - a.ratings);
//     setDisplayGames(sorted);
//   };

//   // handle filter functionality
//   useEffect(() => {
//     let filtered = [...gameData];

//     if (selectedCategory !== "All") {
//       filtered = filtered.filter((game) => game.category === selectedCategory);
//     }


//     setDisplayGames(filtered);
//   }, [selectedCategory, gameData]);

//   const resetFilters = () => {
//     setSelectedCategory("All");
//     // setSelectedPlatform("All");
//     setDisplayGames(gameData);
//   };

//   return (
//     <div className="w-11/12 mx-auto my-8 text-white">

//       {/*  Sidebar + Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

//         {/* left sidebar filters*/}
//         <div className="bg-[#0F172A] p-5 rounded-xl border border-gray-700 h-fit sticky top-24">

//           <h2 className="text-2xl font-bold mb-5 text-center">
//             Filters
//           </h2>

//           {/* Category Filter */}
//           <div className="mb-5">
//             <label className="font-semibold text-sm">Category</label>
//             <select
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//               className="select select-bordered w-full mt-2 bg-[#131A2B] border-gray-600"
//             >
//               {categories.map((cat, idx) => (
//                 <option key={idx}>{cat}</option>
//               ))}
//             </select>
//           </div>

//           {/* Sort Buttons */}
//           <div className="mb-5">
//             <label className="font-semibold text-sm">Sort by Rating</label>
//             <div className="flex flex-col gap-2 mt-2">
//               <button
//                 onClick={handleAscendingByRating}
//                 className="btn bg-blue-600 hover:bg-blue-700 border-0 w-full"
//               >
//                 Ascending
//               </button>
//               <button
//                 onClick={handleDescendingByRating}
//                 className="btn bg-green-600 hover:bg-green-700 border-0 w-full"
//               >
//                 Descending
//               </button>
//             </div>
//           </div>

//           {/* Reset Button */}
//           <button
//             onClick={resetFilters}
//             className="btn w-full bg-red-600 hover:bg-red-700 border-0 mt-3"
//           >
//             Reset Filters
//           </button>

//         </div>

//         {/* game card columns */}
//         <div className="md:col-span-3">

//           <h3 className="text-lg font-semibold mb-4">
//             Total Games: {displayGames.length}
//           </h3>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {displayGames.map((game) => (
//               <PopularSection key={game.id} game={game} />
//             ))}
//           </div>

//           <div className="flex justify-center">
//             <Link
//               to="/"
//               className="btn btn-secondary w-auto mt-8 px-8 font-semibold btn-outline tracking-wide transition-transform transform hover:scale-105"
//             >
//               Back to Home
//             </Link>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default AllGames;

import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import PopularSection from "../../Components/PopularSection/PopularSection";

const AllGames = () => {
  const gameData = useLoaderData();

  useEffect(() => {
    document.title = "All Games";
  }, []);

  const [displayGames, setDisplayGames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setDisplayGames(gameData);
  }, [gameData]);

  const categories = ["All", ...new Set(gameData.map((game) => game.category))];

  // Sorting
  const handleAscendingByRating = () => {
    const sorted = [...displayGames].sort((a, b) => a.ratings - b.ratings);
    setDisplayGames(sorted);
  };

  const handleDescendingByRating = () => {
    const sorted = [...displayGames].sort((a, b) => b.ratings - a.ratings);
    setDisplayGames(sorted);
  };

  // Filtering
  useEffect(() => {
    let filtered = [...gameData];

    if (selectedCategory !== "All") {
      filtered = filtered.filter((game) => game.category === selectedCategory);
    }

    setDisplayGames(filtered);
  }, [selectedCategory, gameData]);

  const resetFilters = () => {
    setSelectedCategory("All");
    setDisplayGames(gameData);
  };

  return (
    <div className="w-11/12 mx-auto my-10 text-white">

      {/* Sidebar + Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Sidebar */}
        <div className="bg-[#0B1120] p-6 rounded-2xl border border-gray-700 shadow-lg sticky top-24 h-fit transition-all">

          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Filter Games
          </h2>

          {/* Category Filter */}
          <div className="mb-8">
            <label className="font-semibold text-sm uppercase tracking-wide text-gray-300">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="select select-bordered w-full mt-2 bg-[#131A2B] border-gray-600 text-sm"
            >
              {categories.map((cat, idx) => (
                <option key={idx}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Sort Buttons */}
          <div className="mb-8">
            <label className="font-semibold text-sm uppercase tracking-wide text-gray-300">
              Sort by Rating
            </label>

            <div className="flex flex-col gap-3 mt-3">
              <button
                onClick={handleAscendingByRating}
                className="btn bg-blue-600 hover:bg-blue-700 border-0 w-full transition transform hover:scale-[1.03]"
              >
                Ascending
              </button>
              <button
                onClick={handleDescendingByRating}
                className="btn bg-green-600 hover:bg-green-700 border-0 w-full transition transform hover:scale-[1.03]"
              >
                Descending
              </button>
            </div>
          </div>

          {/* Reset */}
          <button
            onClick={resetFilters}
            className="btn w-full bg-red-600 hover:bg-red-700 border-0 transition transform hover:scale-[1.03]"
          >
            Reset Filters
          </button>
        </div>

        {/* Game Cards */}
        <div className="md:col-span-3">

          <h3 className="text-xl font-semibold mb-5">
            Total Games: <span className="text-blue-400">{displayGames.length}</span>
          </h3>

          {displayGames.length === 0 && (
            <div className="text-center py-10 text-gray-400 text-lg">
              No games match your filter.
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayGames.map((game) => (
              <PopularSection key={game.id} game={game} />
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              to="/"
              className="btn btn-secondary w-auto mt-10 px-10 font-semibold btn-outline tracking-wide transition-transform transform hover:scale-105"
            >
              Back to Home
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AllGames;

