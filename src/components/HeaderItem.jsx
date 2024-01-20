import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div className="text-white flex items-center gap-3 cursor-pointer  hover:underline underline-offset-8 text-[15px] font-semibold mb-1">
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
}

export default HeaderItem;
