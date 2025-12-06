import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constatnts";
import { addtoprated } from "../utils/movieslice";
import { useEffect } from "react";

 const useTopRated=()=>{
 const dispatch=useDispatch();
  const toprated=useSelector((store)=> store.movies.topRatedMovies);
const getTopRated = async ()=>{
  const movies=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS);
  const data=await movies.json();
  console.log("fetched data");
  dispatch(addtoprated(data.results));
  // console.log("data",data.results);

  
}

useEffect(()=>{
 !toprated &&  getTopRated().then(()=>{

    console.log("call success")
  })
  .catch(()=>{
    console.log("error call");
  })
},[]);
 }
export default useTopRated;