/** @format */

import React, { useEffect, useState } from "react";
import { GrNext, GrPrevious, GrFormNext, GrClose } from "react-icons/gr";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FcPrevious } from "react-icons/fc";
import supabase from "../configs/supabase";
import { User } from "@supabase/supabase-js";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/AuthContext";
import {formatName} from "../utils/format"


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrool, setIsScrool] = useState(false);

  const user = useUser()

  console.log(formatName("luaannn"))
  
  console.log(user?.user_metadata?.avatar_url);

  console.log(window.scrollY);

    window.onscroll = () =>{
      setIsScrool(window.scrollY === 0 ? false : true)
    }

  return (
    <div className={`w-full h-16 ${isScrool ? "bg-spotify-100" : "bg-transparent"} transition-duration-400 flex items-center px-8 justify-between fixed z-20`}>
      <div className="flex gap-4">
        <button className="w-9 h-9 rounded-full bg-spotify-100 flex justify-center items-center">
          <MdNavigateNext className="w-9 h-9 rotate-180  text-white" />
        </button>
        <button className="w-9 h-9 rounded-full bg-spotify-100 flex justify-center items-center">
          <MdNavigateNext className="w-9 h-9 text-white" />
        </button>
        <div className="w-[23rem] h-10 rounded-3xl bg-white flex items-center justify-between">
          <FiSearch className="w-6 h-6 ml-3" />
          <input
            className="w-64 h-full focus:outline-none text-sm"
            placeholder="What do you want to listen to?"
          />
          <GrClose className="w-6 h-6 mr-3" />
        </div>
      </div>

      {!user ? (
        <Link to = "/login" className="absolute left-[900px]">
          <Button classNames="w-28 h-9 rounded-lg bg-white  font-bold text-center leading-9 cursor-pointer">
            Login
          </Button>
        </Link>
      ) : (
        <div
          className="absolute left-[900px] "
          onClick={() => setToggle(!toggle)}
        >
          <button className="w-28 h-9 rounded-full bg-spotify-200 flex justify-around items-center">
            <img
              className="w-8 h-8 rounded-full bg-spotify-300 flex justify-center items-center"
              src={user?.user_metadata?.avatar_url}
            />
            <span className="text-white text-sm font-bold">{formatName(user?.user_metadata?.name)}</span>
            {toggle ? (
              <IoMdArrowDropup className="text-white text-[24px]" />
            ) : (
              <IoMdArrowDropdown className="text-white text-[24px]" />
            )}
          </button>
          {toggle && (
            <div className="w-48 h-20 top-[50px] absolute right-0 bg-spotify-500 z-50 cursor-pointer">
              <div className="p-1 flex flex-col">
                <div
                  className="h-10 pl-3 hover:bg-spotify-200 text-white leading-10"
                  onClick={async () => {
                    await supabase.auth.signOut();
                    window.location.reload();
                  }}
                >
                  Log out
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
