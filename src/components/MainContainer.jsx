import { useSelector } from "react-redux";
import Videobg from "./Videobg";
import Videotitle from "./Videotitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowplayingmovies);
  if (!movies) return;

  const mainMovie = movies[0];
  const { original_title, overview } = mainMovie;

  return (
    <div className="relative w-full h-[100vh] sm:h-screen overflow-x-hidden">
      <Videobg id={mainMovie.id} />
      <Videotitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
