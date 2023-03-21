/** @format */

import React from "react";
import { BsBox2Heart, BsSpotify } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GrDatabase, GrList } from "react-icons/gr";
import { SiAddthis } from "react-icons/si";
import { VscLibrary } from "react-icons/vsc";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[290px] min-h-[800px] bg-spotify-100 px-6 py-6 flex flex-col gap-8 ">
      <div className="flex gap-1 items-center ">
        <BsSpotify className="text-white w-10 h-10" />
        <Link to="/">
          <span className="text-white text-[24px] font-bold cursor-pointer">
            Ninofy{" "}
          </span>
        </Link>
      </div>
      <div className="text-spotify-400 flex flex-col gap-3">
        <Link to={"/"}>
          <div className="flex items-center gap-4 cursor-pointer hover:text-white">
            <AiFillHome className="w-7 h-7" />
            <span className="text-xs font-bold">Home</span>
          </div>
        </Link>
        <Link to={"/search"}>
          <div className="flex items-center gap-4 cursor-pointer hover:text-white">
            <FiSearch className="w-7 h-7" />
            <span className="text-xs font-bold">Search</span>
          </div>
        </Link>
        <div className="flex items-center gap-4 cursor-pointer hover:text-white">
          <VscLibrary className="w-7 h-7" />
          <span className="text-xs font-bold">Your Library</span>
        </div>
      </div>
      <div className="text-spotify-400 flex flex-col gap-3 mt-2">
        <div className="flex items-center gap-4 cursor-pointer hover:text-white">
          <SiAddthis className="w-6 h-6 " />
          <span className="text-xs font-bold">Create Playlist</span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer hover:text-white">
          <BsBox2Heart className="w-6 h-6" />
          <span className="text-xs font-bold">Liked Song</span>
        </div>
        <div className="w-50 h-[0.5px] bg-spotify-400 mt-3 hover:text-white"></div>
        <div className="text-spotify-400 cursor-pointer hover:text-white">
          My Playlist
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
