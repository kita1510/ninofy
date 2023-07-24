import { MdPictureInPictureAlt } from "react-icons/md";
import { TbArrowsShuffle, TbMicrophone2 } from "react-icons/tb";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import { ImLoop2 } from "react-icons/im";
import { HiQueueList } from "react-icons/hi2";
import { FiVolume1, FiVolume2, FiVolumeX } from "react-icons/fi";
import { useRef, useState } from "react";
import Button from "../shared/Button";
import { usePlayer } from "../../contexts/PlayerContext";
import { numberToMinute } from "../../utils/numberToTime";
import InputRange from 'react-input-range';

const ControllerBar = () => {
  const {
    isPlaying,
    handlePlaying,
    handlePausing,
    currentSong,
    song,
    currentTime,
    audioRef,
    songDuration,
    handleSeekTime,
    volume,
    isLoop,
    isMuted,
    handleLoop,
    mutedVolume,
    unMutedVolume,
    handleSeekVolume,
  } = usePlayer();
  // const audioRef = useRef();
  // let songDuration = 0;

  // songDuration = audioRef.current?.duration;
  console.log(volume);
  return (
    <div className="w-full h-20 flex items-center mx-4 justify-between">
      <div className="flex items-center gap-4 w-[30%]">
        <img
          className="w-14 h-14 cursor-pointer object-cover object-center"
          src={song?.songImage}
          alt=""
        />
        <div>
          <div className="font-bold text-white cursor-pointer hover:underline">
            {song?.songName}
          </div>
          <div className="text-white font-[400] opacity-70 text-[12px] cursor-pointer hover:underline">
            {song?.singer}
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
          {!isPlaying ? (
            <Button
              className="p-2"
              onClick={() => {
                handlePlaying();
              }}
            >
              <BsPlayCircleFill
                className=" hover:opacity-100"
                color="white"
                size={35}
              />
            </Button>
          ) : (
            <Button
              className="p-2"
              onClick={() => {
                handlePausing();
              }}
            >
              <BsPauseCircleFill
                className=" hover:opacity-100"
                color="white"
                size={35}
              />
            </Button>
          )}
          <BiSkipNext
            className="opacity-80 hover:opacity-100"
            color="white"
            size={40}
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
          <HiQueueList color="white" size={20} cursor={"pointer"} />

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
          <audio
            className="absolute top-20"
            ref={audioRef}
            src={song?.audio}
            muted={isMuted}
            loop={isLoop}
          />
        </div>
      </div>
    </div>
  );
};

export default ControllerBar;
