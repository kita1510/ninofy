/** @format */

import React, { useEffect, useState } from "react";
import { GrNext, GrPrevious, GrFormNext, GrClose } from "react-icons/gr";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FcPrevious } from "react-icons/fc";
import supabase from "../../lib/supabase";
import { User } from "@supabase/supabase-js";
import Button from "../shared/Button";
import { Link, useParams, useRoutes, useLocation } from "react-router-dom";
import { useUser } from "../../contexts/AuthContext";
import { formatName } from "../../utils/format";
import HeaderProfile from "../shared/HeaderProfile";

const Header = ({
  active,
  isSearch,
}: {
  active: boolean;
  isSearch: boolean;
}) => {
  const [isScrool, setIsScrool] = useState(false);
  const user = useUser();
  const router = useParams();

  console.log(router);

  window.onscroll = () => {
    setIsScrool(window.scrollY === 0 ? false : true);
  };

  return (
    <div
      className={`w-full h-16 ${
        active && isScrool ? "bg-spotify-100" : "bg-transparent"
      } 
       transition-duration-400 flex items-center px-8 justify-between fixed z-20`}
    >
      <div className="flex gap-4">
        <button className="w-9 h-9 rounded-full bg-spotify-100 flex justify-center items-center">
          <MdNavigateNext className="w-9 h-9 rotate-180  text-white" />
        </button>
        <button className="w-9 h-9 rounded-full bg-spotify-100 flex justify-center items-center">
          <MdNavigateNext className="w-9 h-9 text-white" />
        </button>
        {isSearch && (
          <div className="w-[23rem] h-10 rounded-3xl bg-white flex items-center justify-between">
            <FiSearch className="w-6 h-6 ml-3" />
            <input
              className="w-64 h-full focus:outline-none text-sm"
              placeholder="What do you want to listen to?"
              onClick={() => {}}
            />
            <GrClose className="w-6 h-6 mr-3" />
          </div>
        )}
      </div>

      {user ? (
        <HeaderProfile />
      ) : (
        <Link to="/login" className="absolute left-[900px]">
          <Button className="w-28 h-9 rounded-lg bg-white  font-bold text-center leading-9 cursor-pointer">
            Login
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
