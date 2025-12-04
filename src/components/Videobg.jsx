import React from 'react'
import { API_OPTIONS } from '../utils/constatnts';
import { useTrailer } from '../hooks/UseTrailer';
import { useSelector } from 'react-redux';

const Videobg = ({ id }) => {
  useTrailer({ id });

  const trailerObj = useSelector((store) => store.movies.movieTrailer);
  const key = trailerObj?.key;

  return (
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden ">
      <iframe
        className="w-full h-full scale-125 pointer-events-none"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=${key}&fs=0&iv_load_policy=3&disablekb=1`}
        title="Trailer"
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
};

export default Videobg;


