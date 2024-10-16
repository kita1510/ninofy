import clsx from "clsx";
import React, { useEffect, useMemo, useState } from "react";
import { GiPauseButton } from "react-icons/gi";
import { ImPlay3 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { usePlayer } from "../../contexts/PlayerContext";
import { getPlaylist } from "../../services/spotify";
import { Track } from "../../types";
import { Playlist } from "../../types/spotify";
import { songLists } from "../../utils/dummyData";
import Layout from "../layouts/Layout";
import CircleButton from "../shared/CircleButton";
import MusicCard from "../shared/MusicCard";

const ListSong = () => {
  const { isPlaying, setSong, playSong, handlePausing } = usePlayer();
  // console.log(artists);
  const navigate = useNavigate();

  const [playlist, setPlaylist] = useState<Playlist>();

  useEffect(() => {
    getPlaylist().then((res) => setPlaylist(res.data));
  }, []);



  const handleClick = (track: Track) => {
    navigate(`/music/${track.id}`);
  };

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
        {songLists.map((t) => (
          <div key={t.id} className="flex relative">
            <MusicCard
              onClick={() => handleClick(t)}
              track={t}
            />
            {/* </Link> */}
            <CircleButton
              className={clsx(
                `
                bg-green-500 z-[8] absolute right-5 top-32 w-10 h-10`,
              )}
              LeftIcon={!isPlaying ? ImPlay3 : GiPauseButton}
              iconClassName="text-black text-2xl absolute m-auto top-0 right-0 bottom-0 left-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListSong;
