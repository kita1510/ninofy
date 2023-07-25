/** @format */

import React, { ReactNode } from "react";
import { BsBox2Heart, BsSpotify } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GrDatabase, GrList } from "react-icons/gr";
import { SiAddthis } from "react-icons/si";
import { VscLibrary } from "react-icons/vsc";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";
import clsx from "clsx";

interface RoutesProps {
  to: string;
  page?: string;
  icon?: ReactNode;
  space?: boolean
}

const routes: RoutesProps[] = [
  {
    to: "/",
    page: "Home",
    icon: <AiFillHome className="w-7 h-7" />,
  },
  {
    to: "/search",
    page: "Search",
    icon: <FiSearch className="w-7 h-7" />,
  },
  {
    to: "/",
    page: "Your Library",
    icon: <VscLibrary className="w-7 h-7" />,
  },
  {
    to: "/",
    page: "Create Playlist",
    icon: <SiAddthis className="w-6 h-6" />,
    space: true
  },
  {
    to: "/",
    page: "Liked Song",
    icon: <BsBox2Heart className="w-6 h-6" />,
  },
];

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
        {routes.map((route) => (
          <Link to={route.to}>
            <div className={clsx("flex items-center gap-4 cursor-pointer hover:text-white", route.space ? "mt-7" : "")}>
              {route.icon}
              <span className="text-xs font-bold">{route.page}</span>
            </div>
          </Link>
        ))}
        <div className="w-50 h-[0.5px] bg-spotify-400 mt-3 hover:text-white"></div>
        <div className="text-spotify-400 cursor-pointer hover:text-white">
          My Playlist
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
