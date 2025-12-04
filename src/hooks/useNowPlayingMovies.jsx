import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constatnts";
import { addNowplayingmovies } from "../utils/movieslice";
import { useEffect } from "react";

 const useNowPlayingMovies=()=>{
 const dispatch=useDispatch();
const getCurrentPlaying = async ()=>{
  const movies=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
  const data=await movies.json();
  // console.log("fetched data");
  dispatch(addNowplayingmovies(data.results));
  // console.log("data",data.results);

  
}

useEffect(()=>{
  getCurrentPlaying().then(()=>{

    console.log("call success")
  })
  .catch(()=>{
    console.log("error call");
  })
},[]);
 }
export default useNowPlayingMovies;