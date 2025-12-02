import React from "react";
import { NavLink } from "react-router";


const PopularSection = ({ game }) => {
  const { id, coverPhoto, title, ratings } = game;

  return (
    <NavLink to={`/gameDetails/${id}`} className="btn-outline tracking-wide transition-transform transform hover:scale-105">
      <div className="card bg-base-100 shadow-xl rounded-xl overflow-hidden">
        <figure className="h-48 md:h-56 lg:h-64">
          <img
            src={coverPhoto}
            alt={title} 
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body bg-[linear-gradient(to_right,#141E30,#243B55)]">
          <h3>{title}</h3>
          <p>Ratings : <span>{ratings}</span></p>
          <button className="btn border-0 bg-[linear-gradient(to_right,#00F260,#0575E6)] text-white">
            See Details
          </button>
        </div>
      </div>
    </NavLink>
  );
};

export default PopularSection;


