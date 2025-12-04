import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log('popular',movies.popularMovies);
  // console.log('toprated',movies.topRatedMovies);
  // console.log('upcoming',movies.upComing);
  if (!movies) return null;

  return (
    
      <div className="-mt-40 pl-2">
        <MovieList title="Now Playing" movies={movies.nowplayingmovies} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Upcoming Movies" movies={movies.upComing} />
    
    </div>
  );
};

export default SecondaryContainer;
