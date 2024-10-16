import React, { useState } from "react";
import { useUser } from "../../contexts/AuthContext";
import { formatName } from "../../utils/format";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Button from "../shared/Button";
import Avatar from "../shared/Avatar";

const HeaderProfile = () => {
  const [toggle, setToggle] = useState(false);

  const iconType = toggle ? IoMdArrowDropup : IoMdArrowDropdown;

  const { currentUser, logout } = useUser();

  if (!currentUser) return null;

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className=" " onClick={handleToggle}>
      <Button
        className="w-28 h-9 rounded-full bg-spotify-200 flex justify-around items-center "
        RightIcon={iconType}
        iconClassName="text-white text-[24px]"
      >
        <div className="flex items-center gap-2">
          <Avatar
            className="w-8 h-8 rounded-full bg-spotify-300 flex justify-center items-center"
            src={currentUser.photoURL}
          />
          <span className="text-white text-sm font-bold">
            {formatName(currentUser.displayName)}
          </span>
        </div>
      </Button>
      {toggle && (
        <div className="w-48 h-20 top-[50px] absolute right-0 bg-spotify-500 z-50 cursor-pointer">
          <div className="p-1 flex flex-col">
            <Button
              className=" w-4/5 text-center hover:bg-spotify-200 text-white leading-10"
              onClick={logout}
            >
              Log out
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderProfile;
