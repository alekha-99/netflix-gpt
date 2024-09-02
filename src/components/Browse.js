import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRated from "../customHooks/useTopRated";
import useUpComingMovies from "../customHooks/useUpComingMovies";
import useTrendingMovies from "../customHooks/useTrendingMovies";
import useRecommededMovies from "../customHooks/useRecommendedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpComingMovies();
  useTrendingMovies();
  useRecommededMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
