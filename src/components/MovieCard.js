import React from "react";
import { IMAGE_CDN_URL } from "../utils/consts/Constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="movie_poster" src={IMAGE_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
