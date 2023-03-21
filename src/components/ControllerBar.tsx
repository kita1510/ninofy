import React, { useEffect, useState } from "react";
import { SongProps } from "./MusicCard";
import { MdPictureInPictureAlt } from "react-icons/md";
import { TbArrowsShuffle, TbMicrophone2 } from "react-icons/tb";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import { ImLoop2 } from "react-icons/im";
import { HiOutlineVolumeOff, HiOutlineVolumeUp } from "react-icons/hi";
import { HiQueueList } from "react-icons/hi2";
import { numberToMinute } from "../utils/numberToTime";
import useSlider from "../hooks/useSlider";
import { FiVolume1, FiVolume2, FiVolumeX } from "react-icons/fi";

const ControllerBar = ({
  songImage,
  songName,
  singer,
  isPlaying,
  isMuted,
  handlePlaying,
  handlePausing,
  songDuration,
  currentTime,
  mutedVolume,
  audioRef,
  progress,
  volume,
  handleSeekTime,
  handleSeekVolume,
  unMutedVolume,
  handleLoop,
  isLoop,
  step,
  ...props
}: SongProps) => {
  let i: number = 0;
  const arr = [3, 4, 5, 6];
  const { nextSong, previousSong } = useSlider(i, arr);
  // console.log(arr[i]);
  // console.log(currentTime);
  return (
    <div className="w-full h-full flex items-center mx-4 justify-between">
      <div className="flex items-center gap-4 w-[30%]">
        <img className="w-14 h-14 cursor-pointer" src={songImage} alt="" />
        <div>
          <div className="font-bold text-white cursor-pointer hover:underline">
            {songName}
          </div>
          <div className="text-white font-[400] opacity-70 text-[12px] cursor-pointer hover:underline">
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
            onClick={previousSong}
          />
          {!isPlaying ? (
            <BsPlayCircleFill
              className=" hover:opacity-100"
              color="white"
              size={35}
              onClick={handlePlaying}
            />
          ) : (
            <BsPauseCircleFill
              className=" hover:opacity-100"
              color="white"
              size={35}
              onClick={handlePausing}
            />
          )}
          <BiSkipNext
            className="opacity-80 hover:opacity-100"
            color="white"
            size={40}
            onClick={() => {
              nextSong();
              console.log("aaa");
              console.log(arr[i]);
              // i++;
            }}
          />
          <ImLoop2
            className="opacity-80 hover:opacity-100"
            color={`${isLoop ? "green" : "white"} `}
            size={20}
            onClick={handleLoop}

          />
        </div>
        <div className="flex gap-3 justify-center items-center">
          <div className="text-white text-sm">
            {numberToMinute(currentTime)}
          </div>
          <input
            className="h-1 w-96 cursor-pointer"
            type="range"
            min={"0"}
            step={`1`}
            max={"100"}
            value={(currentTime / songDuration) * 100}
            onChange={(e) => handleSeekTime(e)}
          />
          <div className="text-white text-sm">
            {numberToMinute(songDuration)}
          </div>
        </div>
      </div>

      <div className="flex justify-around items-center w-[30%]">
        <div className="flex items-center gap-4">
          <TbMicrophone2 color="white" size={20} cursor={"pointer"} />
          <HiQueueList
            color="white"
            size={20}
            cursor={"pointer"}
          />

          {volume > 0 && volume < 0.25 && (
            <FiVolume1
              color="white"
              size={20}
              cursor={"pointer"}
              onClick={mutedVolume}
            />
          )}
          {volume >= 0.25 && (
            <FiVolume2
              color="white"
              size={20}
              cursor={"pointer"}
              onClick={mutedVolume}
            />
          )}
          {volume == 0 && (
            <FiVolumeX
              color="white"
              size={20}
              cursor={"pointer"}
              onClick={unMutedVolume}
            />
          )}
          <input
            className="h-1 w-28 cursor-pointer"
            type="range"
            min={"0"}
            step={"0.05"}
            max={"1"}
            value={volume}
            onChange={(e) => handleSeekVolume(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default ControllerBar;
