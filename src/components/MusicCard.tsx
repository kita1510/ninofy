/** @format */

import { Card, Avatar, Typography } from "@material-tailwind/react";
import Button from "./Button";
import { ImPlay3 } from "react-icons/im";
import { GiPauseButton } from "react-icons/gi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SongProps {
  id: number;
  imageSong: string;
  nameSong: string;
  singer: string;
  onClick: () => void;
}

function MusicCard({
  id,
  imageSong,
  nameSong,
  singer,
  onClick,
  ...props
}: Partial<SongProps>) {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  function viewDetailCard() {
    navigate("/");
  }

  function handleClick() {
    setIsActive(!isActive);
  }

  // console.log(isActive);
  return (
    <Card
      className="h-64 w-44 relative bg-spotify-200 flex flex-col p-4 gap-1 cursor-pointer rounded-md transition-duration-300 hover:bg-spotify-500 card"
      onClick={() => {
        viewDetailCard;
      }}
    >
      <Avatar className="w-36 h-36 " src={imageSong} />
      <Button
        onClick={() => handleClick()}
        classNames={`${
          isActive ? "" : "hidden"
        } absolute bg-green-500 rounded-full box-shadow-300 bottom-[40%] right-5 z-20 card-play transition-duration-200 hover:bg-green-600`}
      >
        {!isActive ? (
          <ImPlay3
            size={20}
            className="text-black text-2xl absolute m-auto top-0 right-0 bottom-0 left-0 "
          />
        ) : (
          <GiPauseButton
            size={20}
            className="text-black absolute m-auto top-0 right-0 bottom-0 left-0 "
          />
        )}
      </Button>
      <div className="text-white font-bold text-[1rem] mt-3 text-2xl">
        {nameSong}
      </div>
      <div className="text-spotify-400 text-[0.875rem] font-semibold">
        {singer}
      </div>
    </Card>
  );
}

export default MusicCard;
