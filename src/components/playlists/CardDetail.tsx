import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GrPlayFill } from "react-icons/gr";
import { AiOutlineEllipsis, AiOutlineHeart } from "react-icons/ai";
import { BsFillPauseFill } from "react-icons/bs";
import { usePlayer } from "../../contexts/PlayerContext";
import CircleButton from "../shared/CircleButton";
import Layout from "../layouts/Layout";

const CardDetail = () => {
  const song = useLocation();
  const {
    handlePlaying,
    handlePausing,
    isPlaying,
    setSong,
    song: s,
    audioRef,
  } = usePlayer();

  const step = audioRef.current?.duration / 60 / 100;

  async function playSong() {
    await setSong(song.state.song);
    await handlePlaying();
  }

  console.log(s)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <div className="h-[400px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
        <div className="h-full">
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
      <div className="w-full absolute h-[200px] bg-gradient-to-b from-pink-600 via-pink-900 px-12 py-10">
        {!isPlaying ? (
          <CircleButton
            className="w-[56px] h-[56px] bg-green-400 absolute hover:bg-green-300"
            onClick={playSong}
          >
            <GrPlayFill className={``} size={20} />
          </CircleButton>
        ) : (
          <CircleButton
            className="w-[56px] h-[56px] rounded-full bg-green-400 absolute flex justify-center items-center"
            onClick={handlePausing}
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
    </Layout>
  );
};

export default CardDetail;
