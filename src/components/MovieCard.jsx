import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function MovieCard({ movie }) {
  return (
    <img
      src={IMAGE_BASE_URL + movie.poster_path}
      className="w-[160px] md:w-[220px] rounded-xl hover:border-[2px] hover:scale-110 transition-all duration-150 ease-in cursor-pointer"
    />
  );
}

export default MovieCard;
