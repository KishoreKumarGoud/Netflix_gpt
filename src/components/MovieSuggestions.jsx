import React from "react";
import { useSelector } from "react-redux";
import  MovieList  from "./MovieList";

const MovieSuggestions = () => {
   const gptResults= useSelector((store) => store.movies.gptSearchesults);
if (!gptResults) return null;

const { movieNames, movieResults } = gptResults;


  console.log("movie names from suggestions comp", movieNames)

  return (
    <>
    {movieNames ? <div className="bg-black/40  h-full overflow-y-hidden w-full mt-10  ">
      {movieNames.map((name, index) => (
        <MovieList
          key={name}
          title={name}
          movies={movieResults[index]}   
        />
      ))}
    </div> : <div className="bg-black/50 relative z-400"></div>}
 
    </>
  );
};
export default MovieSuggestions;
