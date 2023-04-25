import React, {
  ChangeEvent,
  EventHandler,
  HTMLInputTypeAttribute,
  memo,
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import ReactAudioPlayer from "react-audio-player";
import { useLocation } from "react-router-dom";
import { GrPlayFill } from "react-icons/gr";
import Button from "./shared/Button";
import Navbar from "./patials/Navbar";
import Sidebar from "./patials/Sidebar";
import { AiOutlineEllipsis, AiOutlineHeart } from "react-icons/ai";
import { BsFillPauseFill } from "react-icons/bs";
import { useState } from "react";
import ControllerBar from "./ControllerBar";
import { numberToMinute } from "../utils/numberToTime";
import chimuonbenem from "../assets/chimuonbenem.mp3";
import { usePlayer } from "../contexts/PlayerContext";
import CircleButton from "./shared/CircleButton";

let songDuration = 0;

const CardDetail = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const song = useLocation();
  const [isMuted, setIsMuted] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.6);

  const {
    handlePlaying,
    handlePausing,
    isPlaying,
    setSong,
    song: s,
    audioRef,
  } = usePlayer();
  console.log(audioRef);
  songDuration = audioRef.current?.duration;

  console.log(song);
  console.log(s);
  const step = audioRef.current?.duration / 60 / 100;
  // console.log(1 / step);
  // console.log(currentTime );

  function handleSeekTime(e: any) {
    audioRef.current.currentTime = (songDuration / 100) * e.target?.value;
  }

  function mutedVolume() {
    setIsMuted(true);
    setVolume(0);
  }

  function unMutedVolume() {
    setIsMuted(false);
    setVolume(0.5);
  }

  function handleSeekVolume(e: any) {
    audioRef.current.volume = e.target.value;
    setVolume(e.target.value);
    audioRef.current.onvolumechange = () => {};
  }

  function handleLoop() {
    setIsLoop(!isLoop);
    audioRef.current.loop = true;
  }

  // console.log(song.state.song.audio);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="flex">
      <div className="w-[20%] fixed z-20">
        <Sidebar />
      </div>
      <div className="w-[80%] absolute right-0">
        <Navbar active={true} isSearch={false} />
        <div className="w-full h-[400px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
          <div className="">
            <div className="w-[25%] h-full absolute top-0 left-0">
              <img
                className="w-52 h-52 rounded-full absolute bottom-14 left-14 object-cover object-center"
                src={song.state.song.songImage}
                alt=""
              />
            </div>
            <div className="w-[75%] absolute right-0 h-full bottom-0">
              <div className="absolute bottom-60 left-5 font-semibold text-white ">
                Song
              </div>
              <div className="absolute bottom-32 left-10 font-bold text-[50px] text-white ">
                {song.state.song.songName}
              </div>
              <div className="absolute bottom-10 left-5 font-semibold text-1xl text-white ">
                {song.state.song.singer}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full absolute h-[200px] bg-gradient-to-b from-pink-600 via-pink-900 px-12 py-10">
          {!isPlaying ? (
            <CircleButton
              className="w-[56px] h-[56px] bg-green-400 absolute hover:bg-green-300"
              onClick={async () => {
                await setSong(song.state.song);
                await handlePlaying();
              }}
            >
              <GrPlayFill className={``} size={20} />
            </CircleButton>
          ) : (
            <CircleButton
              className="w-[56px] h-[56px] rounded-full bg-green-400 absolute flex justify-center items-center"
              onClick={() => {
                handlePausing();
              }}
            >
              <BsFillPauseFill className={``} size={24} />
            </CircleButton>
          )}
          <AiOutlineHeart
            className="absolute left-36 top-12"
            size={40}
            color={"white"}
          />
          <AiOutlineEllipsis
            className="absolute left-56 top-12"
            size={40}
            color={"white"}
          />
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
