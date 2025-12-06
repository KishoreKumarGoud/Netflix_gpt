import React from 'react'
import { poster_url } from '../utils/constatnts'

const MovieCard = ({ poster }) => {
  if (!poster) return null;

  return (
    
    <img
      className="w-48 h-72 object-cover shrink-0 rounded-lg hover:scale-105 transition-transform duration-300"
      src={poster_url + poster}
      alt="Poster"
    />
  );
};

export default MovieCard;
