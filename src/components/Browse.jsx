/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constatnts";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addNowplayingmovies } from "../utils/movieslice";

import MainContainer from "./MainContainer";
import SecondayContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useToprated";
import useUpcoming from "../hooks/useUpcoming";
import GPTSearch from "./SearchPage";

const Browse=()=> {
    const isgptsearch= useSelector(store=>store.gpt.showsearch);

useNowPlayingMovies();
useTopRated();
usePopularMovies();
useUpcoming();
// App.jsx OR Header.jsx (top line)
console.log("🔥 NEW BUILD VERSION LIVE - 7 DEC 🔥");

// console.log("gpt value",isgptsearch)
  return (
   <div className="bg-black">
    <Header/>
   {isgptsearch?<div className="bg-white"><GPTSearch/></div>: <><MainContainer/>
    <div className="relative z-12">
          <SecondayContainer/>

    </div></>} 
    {/*

main movie,video,title
second-recommanded ==movie cards list
    */}
    
  </div>
  )
}

export default Browse;