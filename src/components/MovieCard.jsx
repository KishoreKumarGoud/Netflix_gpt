import React from "react";
import { poster_url } from "../utils/constatnts";

const MovieCard = ({ poster }) => {
  if (!poster) return null;

  return (
    <img
      className="
        w-[120px] h-[180px]      /* small screens */
        sm:w-[140px] sm:h-[210px]
        md:w-[160px] md:h-[240px]
        lg:w-[180px] lg:h-[270px]
        xl:w-[200px] xl:h-[300px]
        2xl:w-[220px] 2xl:h-[330px]
        object-cover shrink-0 rounded-lg
        transition-transform duration-300
        hover:scale-105
      "
      src={poster_url + poster}
      alt="Poster"
    />
  );
};

export default MovieCard;
