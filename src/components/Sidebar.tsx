import React from "react";
import { BsBox2Heart, BsSpotify } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GrDatabase, GrList } from "react-icons/gr";
import { SiAddthis } from "react-icons/si";
import { VscLibrary } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <div className="w-[360px] h-[680px] bg-spotify-100 px-6 py-6 flex flex-col gap-8">
      <div className="flex gap-1 items-center">
        <BsSpotify className="text-white w-10 h-10"></BsSpotify>
        <span className="text-white text-[24px] font-bold">Ninofy </span>
      </div>
      <div className="text-white flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <AiFillHome className="w-7 h-7"></AiFillHome>
          <span className="text-xs font-semibold">Home</span>
        </div>
        <div className="flex items-center gap-4">
          <FiSearch className="w-7 h-7"></FiSearch>
          <span className="text-xs font-semibold">Search</span>
        </div>
        <div className="flex items-center gap-4">
          <VscLibrary className="w-7 h-7 text-white"></VscLibrary>
          <span className="text-xs font-semibold">Your Library</span>
        </div>
      </div>
      <div className="text-white flex flex-col gap-3 mt-2">
        <div className="flex items-center gap-4">
          <SiAddthis className="w-6 h-6 text-white"></SiAddthis>
          <span className="text-xs font-semibold">Create Playlist</span>
        </div>
        <div className="flex items-center gap-4">
          <BsBox2Heart className="w-6 h-6 text-white"></BsBox2Heart>
          <span className="text-xs font-semibold">Liked Song</span>
        </div>
        <div className="w-50 h-[0.5px] bg-white mt-3"></div>
        <div className="text-white">My Playlist</div>
      </div>
    </div>
  );
};

export default Sidebar;
