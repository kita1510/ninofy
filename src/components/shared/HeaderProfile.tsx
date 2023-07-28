import React, { useState } from "react";
import { useUser } from "../../contexts/AuthContext";
import supabase from "../../lib/supabase";
import { formatName } from "../../utils/format";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Button from "./Button";
import Avatar from "./Avatar";

const HeaderProfile = () => {
  const [toggle, setToggle] = useState(false);

  const iconType = toggle ? IoMdArrowDropup : IoMdArrowDropdown;

  const user = useUser();

  if (!user) return null;

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };
  // console.log(user);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="absolute left-[900px] " onClick={handleToggle}>
      <Button
        className="w-28 h-9 rounded-full bg-spotify-200 flex justify-around items-center "
        RightIcon={iconType}
        iconClassName="text-white text-[24px]"
      >
        <div className="flex items-center gap-2">
          <Avatar
            className="w-8 h-8 rounded-full bg-spotify-300 flex justify-center items-center"
            src={user.avatar_url}
          />
          <span className="text-white text-sm font-bold">
            {formatName(user.username)}
          </span>
        </div>
      </Button>
      {toggle && (
        <div className="w-48 h-20 top-[50px] absolute right-0 bg-spotify-500 z-50 cursor-pointer">
          <div className="p-1 flex flex-col">
            <div
              className="h-10 pl-3 hover:bg-spotify-200 text-white leading-10"
              onClick={handleSignOut}
            >
              Log out
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderProfile;
