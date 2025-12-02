import React from "react";
import { Link } from "react-router";

const GameDetailsCard = ({ gameDataDetails }) => {
  // console.log(gameDataDetails);

  const { coverPhoto, title, category, developer, ratings, description, downloadLink } =
    gameDataDetails;

  return (
    <div className="space-y-5">
      <div>
        <h3 className="mt-10 text-white text-center font-extrabold text-2xl sm:text-3xl md:text-4xl mb-2 px-2">
          {title}
        </h3>
      </div>
      <div>
        <img
          src={coverPhoto}
          alt={title}
          className="border w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover rounded-xl"
        />
      </div>
      <div className="bg-[linear-gradient(to_right,#141E30,#243B55)] p-3 rounded-2xl py-5">
        <div className="text-white space-y-3 text-2xl">
          <p className="font-bold">CateGory: {category}</p>
          <p className="font-semibold">Developer: {developer}</p>
          <p className="font-semibold">Ratings: {ratings} ⭐</p>
        </div>
        <div className="text-white bg-[linear-gradient(to_right,#00F260,#0575E6)] rounded-2xl p-5 mt-5">
          <h3 className="font-bold">Description</h3>
          <div>{description}</div>
        </div>

        <div className="mt-5 flex justify-center items-center gap-5">
            <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="btn border-0 bg-[linear-gradient(to_right,#FF3A3A,#5B5BFF)] text-white btn-outline tracking-wide transition-transform transform hover:scale-105">Download Now</a>
            <Link to="/" className="btn btn-secondary w-full sm:w-auto px-8 font-semibold btn-outline tracking-wide transition-transform transform hover:scale-105">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsCard;
