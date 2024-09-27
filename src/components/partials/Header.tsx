/** @format */

import React, { useEffect, useState } from "react";
import { GrNext, GrPrevious, GrFormNext, GrClose } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import Button from "../shared/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/AuthContext";
import HeaderProfile from "../shared/HeaderProfile";
import CircleButton from "../shared/CircleButton";
import clsx from "clsx";
import TransLink from "../shared/TransLink";

const Header = ({ active }: { active: boolean }) => {
  const user = useUser();
  const [isScroll, setIsScroll] = useState(false);
  const searchParams = new URL(window.location.href);
  const navigate = useNavigate();

  const isSearch = searchParams.pathname.includes("search");

  window.onscroll = () => {
    setIsScroll(window.scrollY === 0 ? false : true);
  };

  return (
    <div
      className={clsx(
        `w-full h-16`,
        active && isScroll ? "bg-spotify-100" : "bg-transparent",
        "transition-duration-400 flex items-center px-8 justify-between fixed z-20"
      )}
    >
      <div className="flex gap-4">
        <CircleButton
          className="w-9 h-9 rounded-full bg-spotify-100 flex justify-center items-center"
          LeftIcon={MdNavigateNext}
          iconClassName="w-9 h-9 rotate-180 text-white"
          onClick={() => navigate(-1)}
        />
        <CircleButton
          className="w-9 h-9 rounded-full bg-spotify-100 flex justify-center items-center"
          LeftIcon={MdNavigateNext}
          iconClassName={"w-9 h-9 text-white"}
          onClick={() => navigate(1)}
        />
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

      {/* {user ? (
        <HeaderProfile />
      ) : (
        <TransLink to="/login" className="absolute left-[900px]">
          <Button className="w-28 h-9 rounded-lg bg-white  font-bold text-center leading-9 cursor-pointer">
            Login
          </Button>
        </TransLink>
      )} */}

      <div className="absolute left-[900px]">
        <Button className="w-28 h-9 rounded-lg bg-white  font-bold text-center leading-9 cursor-pointer">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Header;
