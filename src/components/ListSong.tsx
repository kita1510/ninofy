/** @format */

import React, { useEffect, useState } from "react";
import { GiPauseButton } from "react-icons/gi";
import { ImPlay3 } from "react-icons/im";
import { Link } from "react-router-dom";
import { usePlayer } from "../contexts/PlayerContext";
import { useAccessToken } from "../contexts/SpotifyContext";
import { songLists } from "../utils/dummyData";
import Button from "./shared/Button";
import CircleButton from "./shared/CircleButton";
import MusicCard from "./shared/MusicCard";

const ListSong = () => {
  const { isPlaying, setSong, currentSong, handlePlaying, handlePausing } =
    usePlayer();
  // console.log(artists);

  return (
    <div className="flex gap-6 flex-col ">
      <div className="flex justify-between items-center">
        <div className="text-white text-[1.3rem] font-bold inline hover:underline cursor-pointer">
          Popular radio
        </div>
        <div className="text-spotify-400 text-sm font-bold inline hover:underline cursor-pointer">
          Show all
        </div>
      </div>
      <div className="flex gap-6 ">
        {songLists.map((i) => (
          <div key={i.id} className="flex relative">
            <Link
              to={{ pathname: `/music/${i.id}` }}
              state={{ song: i, listSong: songLists }}
            >
              <MusicCard
                id={i.id}
                songImage={i.songImage}
                songName={i.songName}
                singer={i.singer}
              />
            </Link>
            {!isPlaying ? (
              <CircleButton
                className={`
                 bg-green-500 absolute right-5 top-28 w-10 h-10 box-shadow-300 transition-duration-200 hover:bg-green-600`}
                onClick={async () => {
                  await setSong(i);
                  await handlePlaying();
                }}
              >
                <ImPlay3
                  size={20}
                  className="text-black text-2xl absolute m-auto top-0 right-0 bottom-0 left-0 "
                />
              </CircleButton>
            ) : (
              <CircleButton
                className={`
                 bg-green-500 absolute right-5 top-28 w-10 h-10 box-shadow-300 transition-duration-200 hover:bg-green-600`}
                onClick={async () => {
                  await handlePausing();
                }}
              >
                <GiPauseButton
                  size={20}
                  className="text-black  m-auto top-0 right-0 bottom-0 left-0 "
                />
              </CircleButton>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListSong;
