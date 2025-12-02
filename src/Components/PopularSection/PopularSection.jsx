import React from "react";
import { NavLink } from "react-router";

const PopularSection = ({ game }) => {
  const { id, coverPhoto, title, ratings } = game;

  return (
    <NavLink
      to={`/gameDetails/${id}`}
      className="btn-outline tracking-wide transition-transform transform hover:scale-105"
    >
      <div className="card bg-base-100 shadow-xl rounded-xl overflow-hidden h-full flex flex-col">
        {/* Image Section */}
        <figure className="h-48 md:h-52 lg:h-56 flex-shrink-0">
          <img
            src={coverPhoto}
            alt={title}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body bg-[linear-gradient(to_right,#141E30,#243B55)] flex flex-col justify-between py-4 px-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold truncate" title={title}>
              {title}
            </h3>
            <p className="text-sm">
              Ratings: <span>{ratings}</span>
            </p>
          </div>

          <button className="btn border-0 mt-2 bg-[linear-gradient(to_right,#00F260,#0575E6)] text-white w-full">
            See Details
          </button>
        </div>
      </div>
    </NavLink>
  );
};

export default PopularSection;
