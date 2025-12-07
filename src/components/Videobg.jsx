import React from "react";
import { useTrailer } from "../hooks/UseTrailer";
import { useSelector } from "react-redux";

const Videobg = ({ id }) => {
  useTrailer({ id });

  const trailerObj = useSelector((store) => store.movies.movieTrailer);
  const key = trailerObj?.key;

  if (!key) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">

      {/* This layer makes the video cover the whole screen on ALL ratios */}
      <div className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 scale-110">

        <iframe
          className="w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] pointer-events-none"
          src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=${key}&fs=0&iv_load_policy=3&disablekb=1`}
          allow="autoplay; encrypted-media"
          title="Trailer"
        />

      </div>

    </div>
  );
};

export default Videobg;
