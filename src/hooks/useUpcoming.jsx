import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constatnts";
import { addUpcoming } from "../utils/movieslice";
import { useEffect } from "react";

 const useUpcoming=()=>{
 const dispatch=useDispatch();
const getUpcoming = async ()=>{
  const movies=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);
  const data=await movies.json();
  // console.log("fetched data");
  dispatch(addUpcoming(data.results));
  // console.log("data",data.results);

  
}

useEffect(()=>{
  getUpcoming().then(()=>{

    console.log("call success")
  })
  .catch(()=>{
    console.log("error call");
  })
},[]);
 }
export default useUpcoming;