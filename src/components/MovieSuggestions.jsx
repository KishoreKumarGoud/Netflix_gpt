import React from 'react'
import { useSelector } from 'react-redux';

const MovieSuggestions = () => {
    const moviesfromredux=useSelector((store)=>store.movies.gptSearchesults);
    console.loga("in movisuggestion from redux",moviesfromredux)
  return (
    <div>
        {/* {
            moviesfromredux.map((movie)=>{

            })
        } */}
    </div>
  )
}

export default MovieSuggestions