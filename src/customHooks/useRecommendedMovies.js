import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/consts/Constant";
import { addRecommendedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useRecommededMovies = (movieId) => {
  const dispatch = useDispatch();
  const recommendedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/similar?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addRecommendedMovies(json.results));
  };
  useEffect(() => {
    recommendedMovies();
  }, []);
};

export default useRecommededMovies;
