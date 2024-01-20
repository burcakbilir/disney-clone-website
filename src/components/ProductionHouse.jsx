import React from "react";
import disney from "./../assets/images/disney.png";
import marvel from "./../assets/images/marvel.png";
import nationalG from "./../assets/images/nationalG.png";
import pixar from "./../assets/images/pixar.png";
import starwars from "./../assets/images/starwar.png";

import disneyV from "./../assets/videos/disney.mp4";
import marvelV from "./../assets/videos/marvel.mp4";
import nationalGeographicV from "./../assets/videos/national-geographic.mp4";
import pixarV from "./../assets/videos/pixar.mp4";
import starwarsV from "./../assets/videos/star-wars.mp4";

function ProductionHouse() {
  const productionHouseList = [
    {
      id: 0,
      image: disney,
      video: disneyV,
    },
    {
      id: 1,
      image: marvel,
      video: marvelV,
    },
    {
      id: 2,
      image: nationalG,
      video: nationalGeographicV,
    },
    {
      id: 3,
      image: pixar,
      video: pixarV,
    },
    {
      id: 4,
      image: starwars,
      video: starwarsV,
    },
  ];
  return (
    <div className="flex   w-screen px-16 py-4 ">
      {productionHouseList.map((item) => (
        <div
          className="m-2  border-[1px] border-gray-400 rounded-lg bg-gray-900  shadow-lg shadow-gray-800 hover:scale-110 cursor-pointer transation-all duration-300 ease-in-out relative"
          key={item.id}
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50 "
          />
          <img src={item.image} className="w-full z-[1] opacity-100 " />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
