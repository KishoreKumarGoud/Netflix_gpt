import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieSuggestions = () => {
  const gptResults = useSelector((store) => store.movies.gptSearchesults);
  if (!gptResults) return null;

  const { movieNames, movieResults } = gptResults;

  // console.log("movie names from suggestions comp", movieNames);

  return (
    <>
      {movieNames ? (
        <div
          className="
            bg-black/40 
            h-full 
            overflow-y-hidden 
            w-full 
            mt-10 

            px-2 sm:px-4 md:px-6 lg:px-8
            pb-6 sm:pb-8
          "
        >
          <div
            className="
              flex flex-col 
              gap-6 sm:gap-8 md:gap-10
            "
          >
            {movieNames.map((name, index) => (
              <MovieList
                key={name}
                title={name}
                movies={movieResults[index]}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-black/50 relative z-400 w-full min-h-[200px]"></div>
      )}
    </>
  );
};

export default MovieSuggestions;
