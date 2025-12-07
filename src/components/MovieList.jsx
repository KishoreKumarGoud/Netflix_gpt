import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {

  if (!movies || movies.length === 0) return null;

  return (
    <div className='px-4 sm:px-6 no-scrollbar'>
      <h1 className="text-white text-lg sm:text-xl py-3 sm:py-4 font-bold">
        {title}
      </h1>

      <div className="flex gap-3 sm:gap-4 overflow-x-scroll no-scrollbar">
        {movies.map((ele) => (
          <MovieCard key={ele.id} poster={ele.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
