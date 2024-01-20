import React, { useState } from "react";
import logo from "./../assets/images/logo.png";
import avatar from "./../assets/images/Luca-Profile-Avatars.webp";

import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      id: 0,
      name: "HOME",
      icon: HiHome,
    },
    {
      id: 1,
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      id: 2,
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      id: 3,
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      id: 4,
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      id: 5,
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between gap-8 p-8 ">
      <div className="flex items-center gap-8">
        <img src={logo} className="w-[90px] object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} key={item.id} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem name={""} Icon={item.icon} key={item.id} />
              )
          )}
        </div>
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItem name={""} Icon={HiDotsVertical} />
          {toggle ? (
            <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-6 py-4 ">
              {menu.map(
                (item, index) =>
                  index > 2 && (
                    <HeaderItem
                      name={item.name}
                      Icon={item.icon}
                      key={item.id}
                    />
                  )
              )}
            </div>
          ) : null}
        </div>
      </div>
      <div>
        <img src={avatar} alt="" className="w-[50px]" />
      </div>
    </div>
  );
}

export default Header;
