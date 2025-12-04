import React from 'react'
import { poster_url } from '../utils/constatnts'
export const MovieCard = ({ poster }) => {
  if (!poster) return null;

  return (
    <img
      className="w-48 h-72 object-cover shrink-0 rounded-lg hover:scale-108 hover:mx-1 transition-all duration-500"
      src={poster_url + poster}
      alt="Poster"
    />
  );
};


