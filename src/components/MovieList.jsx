import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "./../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import LargerMovieCard from "./LargerMovieCard";

function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const slideRight = (element) => {
    console.log("tıklandı");
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };
  return (
    <div className="relative">
      {" "}
      <HiChevronLeft
        onClick={() => slideLeft(elementRef.current)}
        className={`hidden md:block text-white text-[40px] absolute  cursor-pointer z-10 ${
          index_ % 3 == 0 ? "mt-[75px] " : "mt-[160px] "
        } `}
      />
      <HiChevronRight
        onClick={() => slideRight(elementRef.current)}
        className={`hidden md:block text-white text-[40px] absolute right-0 cursor-pointer z-10 ${
          index_ % 3 == 0 ? "mt-[75px]" : "mt-[160px]"
        }`}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 pb-5 px-3  "
      >
        {movieList.map((item, index) => (
          <React.Fragment key={item.id}>
            {index_ % 3 == 0 ? (
              <LargerMovieCard movie={item} key={item.id} />
            ) : (
              <MovieCard movie={item} key={item.id} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
