/** @format */

import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/AuthContext";
import CircleButton from "../shared/CircleButton";
import clsx from "clsx";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "../shared/Image";
import { FcGoogle } from "react-icons/fc";
import { stopPropagation } from "../../lib/dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app, auth } from "../../lib/firebase";
import Avatar from "../shared/Avatar";
import * as Popover from "@radix-ui/react-popover";

const Header = ({ active }: { active: boolean }) => {
  const [isScroll, setIsScroll] = useState(false);
  const searchParams = new URL(window.location.href);
  const navigate = useNavigate();
  const { signInWithGoogle, currentUser } = useUser();
  const isSearch = searchParams.pathname.includes("search");

  window.onscroll = () => {
    setIsScroll(window.scrollY === 0 ? false : true);
  };

  console.log(currentUser);
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
      <div className="absolute left-[900px] z-10">
        {!currentUser ? (
          <Dialog.Root
            onOpenChange={() => {
              stopPropagation;
            }}
          >
            <Dialog.Trigger asChild>
              <Button className="w-28 h-9 rounded-lg bg-white  font-bold text-center leading-9 cursor-pointer">
                Login
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
              <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
                <Image
                  src="../../../public/ninoicon.jpg"
                  className="w-14 h-14 rounded-full block mx-auto mb-2"
                ></Image>
                <Dialog.Title className="text-center text-[17px] font-medium mb-2">
                  Login to Ninofy
                </Dialog.Title>
                <div className="flex justify-center">
                  <CircleButton
                    onClick={signInWithGoogle}
                    LeftIcon={FcGoogle}
                    className={"border w-10 h-10 border-gray-300"}
                  />
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ) : (
          <Popover.Root>
            <Popover.Trigger asChild>
              <Avatar
                className="cursor-pointer w-10 h-10"
                src={currentUser.photoURL}
              />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                className="w-[260px] rounded bg-white p-5 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"
                sideOffset={5}
              >
                <div className="flex flex-col gap-2.5">
                  <p className="mb-2.5 text-[15px] font-medium leading-[19px] text-mauve12">
                    Dimensions
                  </p>
                </div>
                <Popover.Arrow className="fill-white" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        )}
      </div>
    </div>
  );
};

export default Header;
