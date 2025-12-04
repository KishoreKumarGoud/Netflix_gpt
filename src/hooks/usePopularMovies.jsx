import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constatnts";
import { addpopularMovies } from "../utils/movieslice";
import { useEffect } from "react";

 const usePopularMovies=()=>{
 const dispatch=useDispatch();
const getpopular = async ()=>{
  const movies=await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS);
  const data=await movies.json();
  // console.log("fetched data");
  dispatch(addpopularMovies(data.results));
  // console.log("data",data.results);

  
}

useEffect(()=>{
  getpopular().then(()=>{

    console.log("call success")
  })
  .catch(()=>{
    console.log("error call");
  })
},[]);
 }
export default usePopularMovies;