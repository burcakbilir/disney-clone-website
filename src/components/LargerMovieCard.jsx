import React from "react";
const IMAGE_BASE_url = "https://image.tmdb.org/t/p/original";

function LargerMovieCard({ movie }) {
  return (
    <>
      <section className="hover:scale-110 transation duration-150 ease-in ">
        <img
          src={IMAGE_BASE_url + movie.backdrop_path}
          className="w-[190px] md:w-[260px] rounded-xl hover:border-[2px] hover:scale-110 transition-all duration-150 ease-in cursor-pointer"
        />
        <h2 className="w-[190px] md:w-[260px] pt-2">{movie.title}</h2>
      </section>
    </>
  );
}

export default LargerMovieCard;
