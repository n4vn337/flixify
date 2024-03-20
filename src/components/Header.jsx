import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounder-lg">
          IMDb
        </span>
        <span className="text-xl hidden sm:inline">Clone</span>
      </div>
    </div>
  );
};

export default Header;
