import React from 'react'
import {MovieCard} from './MovieCard'

export const MovieList = ({ title, movies }) => {

  if (!movies || movies.length === 0) return null;

  // console.log("movies getting in list", movies);

  return (
  <div className='px-4 '>
  <h1 className="text-red-600 text-xl py-4 font-bold">{title}</h1>

  <div className="flex gap-2 overflow-x-scroll no-scrollbar">
    {movies.map((ele) => (
      <MovieCard key={ele.id} poster={ele.poster_path} />
    ))}
  </div>
</div>

  );
};
