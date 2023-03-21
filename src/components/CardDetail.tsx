import React, { ChangeEvent, EventHandler, HTMLInputTypeAttribute, memo, MutableRefObject, useCallback, useEffect, useMemo, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useLocation } from "react-router-dom";
import { GrPlayFill } from "react-icons/gr";
import Button from "./Button";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { AiOutlineEllipsis, AiOutlineHeart } from "react-icons/ai";
import { BsFillPauseFill } from "react-icons/bs";
import { useState } from "react";
import ControllerBar from "./ControllerBar";
import { numberToMinute } from "../utils/numberToTime";
import { progress } from "framer-motion";

let songDuration = 0;

const CardDetail = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const song = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null!);
  const [volume, setVolume] = useState(0.6);

  songDuration = audioRef.current?.duration;

  console.log(audioRef);

  function handlePlaying() {
    audioRef.current?.play();
    audioRef.current.onplay = () => {
      setIsPlaying(true);
    };
    audioRef.current.ontimeupdate = () => {
      setCurrentTime((prev) => (prev = audioRef.current?.currentTime));
      // console.log(currentTime);
    };
  }

  const step = audioRef.current?.duration / 60 / 100;
  // console.log(1 / step);
  // console.log(currentTime );

  function handlePausing() {
    audioRef.current?.pause();
    audioRef.current.onpause = () => {
      setIsPlaying(false);
    };
  }

  function handleSeekTime(e: any) {
    audioRef.current.currentTime = songDuration /100 * e.target?.value;
  }

  function mutedVolume() {
    setIsMuted(true);
    setVolume(0)
  }

  function unMutedVolume() {
    setIsMuted(false);
    setVolume(0.5);
  }

  function handleSeekVolume (e:any) {
    audioRef.current.volume = e.target.value
    setVolume(e.target.value)
    audioRef.current.onvolumechange = () =>{
    }
  }

  function handleLoop (){
    setIsLoop(!isLoop)
    audioRef.current.loop = true
  }


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
            <Button
              classNames="w-[56px] h-[56px] rounded-full bg-green-400 absolute flex justify-center items-center hover:bg-green-300"
              onClick={handlePlaying}
            >
              <GrPlayFill className={``} size={20} />
            </Button>
          ) : (
            <Button
              classNames="w-[56px] h-[56px] rounded-full bg-green-400 absolute flex justify-center items-center"
              onClick={handlePausing}
            >
              <BsFillPauseFill className={``} size={24} />
            </Button>
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
          <audio
            className="absolute top-20"
            ref={audioRef}
            src={song.state.song.audio}
            muted={isMuted}
            loop = {isLoop}
            
          />
        </div>
      </div>
      <div className="w-full h-[90px] fixed bottom-0 bg-spotify-200 border-t-[1px] border-slate-700 z-[099999]">
        <ControllerBar
          id={song.state.song.id}
          songName={song.state.song.songName}
          songImage={song.state.song.songImage}
          singer={song.state.song.singer}
          audio= {song.state.song.audio}
          isPlaying={isPlaying}
          isMuted={isMuted}
          handlePlaying={handlePlaying}
          handlePausing={handlePausing}
          songDuration={songDuration}
          currentTime={currentTime}
          mutedVolume={mutedVolume}
          unMutedVolume = {unMutedVolume}
          audioRef={audioRef}
          progress={progress}
          volume = {volume}
          handleSeekTime={handleSeekTime}
          handleSeekVolume={handleSeekVolume}
          handleLoop= {handleLoop}
          isLoop = {isLoop}
          step={step}
        ></ControllerBar>
      </div>
    </div>
  );
};

export default CardDetail;
