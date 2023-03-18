import React from "react";
import { SongProps } from "./MusicCard";
import { MdPictureInPictureAlt } from "react-icons/md";
import { TbArrowsShuffle, TbMicrophone2 } from "react-icons/tb";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircleFill } from "react-icons/bs";
import { ImLoop2 } from "react-icons/im";
import { HiOutlineVolumeUp } from "react-icons/hi";
import { HiQueueList } from "react-icons/hi2";

const ControllerBar = ({
  songImage,
  songName,
  singer,
  ...props
}: Partial<SongProps>) => {
  return (
    <div className="w-full h-full flex items-center mx-4 justify-between">
      <div className="flex items-center gap-4 w-[30%]">
        <img className="w-14 h-14" src={songImage} alt="" />
        <div>
          <div className="font-bold text-white">{songName}</div>
          <div className="text-white font-[400] opacity-70 text-[12px]">
            {singer}
          </div>
        </div>
        <div className="flex px-3 gap-4">
          <AiOutlineHeart color="white" size={20} />
          <MdPictureInPictureAlt color="white" size={20} />
        </div>
      </div>

      <div className="flex flex-col gap-1 w-[50%]">
        <div className="flex items-center gap-4 justify-center">
          <TbArrowsShuffle
            className="opacity-80 hover:opacity-100"
            color="white"
            size={20}
          />
          <BiSkipPrevious
            className="opacity-80 hover:opacity-100"
            color="white"
            size={40}
          />
          <BsPlayCircleFill
            className=" hover:opacity-100"
            color="white"
            size={35}
          />
          <BiSkipNext
            className="opacity-80 hover:opacity-100"
            color="white"
            size={40}
          />
          <ImLoop2
            className="opacity-80 hover:opacity-100"
            color="white"
            size={20}
          />
        </div>
        <div className="flex gap-3 justify-center items-center">
          <div className="text-white text-sm">1:20</div>
          <input className="h-1 w-96" aria-checked="mixed" type="range" />
          <div className="text-white text-sm">1:20</div>
        </div>
      </div>

      <div className="flex justify-around items-center w-[30%]">
        <div className="flex items-center gap-4">
          <TbMicrophone2 color="white" size={20} />
          <HiQueueList color="white" size={20} />
          <HiOutlineVolumeUp color="white" size={20} />
          <input className="h-1 w-28" aria-checked="mixed" type="range" />
        </div>
      </div>
    </div>
  );
};

export default ControllerBar;
