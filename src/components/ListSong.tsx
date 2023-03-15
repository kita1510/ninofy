/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { songLists } from "../utils/dummyData";
import MusicCard from "./MusicCard";

const ListSong = () => {
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
          <Link to={{ pathname: `/music/${i.id}` }} state={{song: i}}>
            <MusicCard
              id={i.id}
              imageSong={i.image}
              nameSong={i.nameSong}
              singer={i.singer}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListSong;
