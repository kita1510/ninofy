import React from "react";
import { Button } from "@material-tailwind/react";
import { GrNext, GrPrevious,GrFormNext } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { FcNext } from "react-icons/fc";
import { MdNavigateNext } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-spotify-300 flex items-center px-8 justify-between">
      <div className="flex gap-4">
        <button className="w-9 h-9 rounded-full bg-spotify-100 flex justify-center items-center">
          <GrPrevious className="w-3 h-3 text-white" />
        </button>
        <button className="w-9 h-9 rounded-full bg-spotify-100 flex justify-center items-center">
          <MdNavigateNext className="w-9 h-9 text-3xl text-white" />
        </button>
      </div>
      <div>
        <button className="w-28 h-9 rounded-full bg-spotify-200 flex justify-around items-center">
          <button className="w-8 h-8 rounded-full bg-spotify-300 flex justify-center items-center">
          </button>
          <span className="text-white text-sm font-bold">thu</span>
          <IoMdArrowDropdown className="text-white text-[24px]"></IoMdArrowDropdown>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
