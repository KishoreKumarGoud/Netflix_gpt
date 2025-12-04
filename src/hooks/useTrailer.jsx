/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtrailervideo } from '../utils/movieslice';
import { API_OPTIONS } from '../utils/constatnts';

export const useTrailer = ({id}) => {
     const dispatch=useDispatch();
        

    const getmovievideo = async ()=>{
      const movies=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,API_OPTIONS);
      const data=await movies.json();
    //   dispatch(addNowplayingmovies(data.results));
    const moviedetails=data.results.filter((video)=> { return video.type==='Trailer' & video.name=="Trailer"} );
    // console.log("verify",moviedetails);
    // console.log(moviedetails[0],"moviedet");
dispatch(addtrailervideo(moviedetails[0]));
      
    }
    useEffect(()=>{
getmovievideo();
    },[])
    
  return (
    <div></div>
  )
}
