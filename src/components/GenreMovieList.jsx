import React from "react";
import GenresList from "../Constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div>
      {GenresList.genere.map(
        (item, index) =>
          index <= 4 && (
            <div key={item.id} className="p-4 text-white px-16">
              <h2>{item.name}</h2>
              <MovieList genreId={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
