import clsx from "clsx";
import React, { useEffect, useMemo, useState } from "react";
import { GiPauseButton } from "react-icons/gi";
import { ImPlay3 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { usePlayer } from "../../contexts/PlayerContext";
import { Track } from "../../types";
import { songLists } from "../../utils/dummyData";
import CircleButton from "../shared/CircleButton";
import MusicCard from "../shared/MusicCard";

const ListSong = () => {
  const { isPlaying, setSong, handlePlaying, handlePausing } = usePlayer();
  // console.log(artists);
  const navigate = useNavigate();
  const [isMouseHover, setIsMouseHover] = useState(false);

  const iconClass = !isPlaying ? ImPlay3 : GiPauseButton;

  // useEffect(() => {
  //   if (isPlaying) {
  //     setIsMouseHover(true);
  //   } else {
  //     setIsMouseHover(false);
  //   }
  // }, [isPlaying]);

  console.log(isMouseHover);

  const handleMouseHover = (boolean: boolean) => () => {
    setIsMouseHover(boolean);
  };

  const memoizedHandleMouseOver = useMemo(() => handleMouseHover(true), []);
  const memoizedHandleMouseLeave = useMemo(() => handleMouseHover(false), []);

  const setTrackToPlay = (track: Track) => async () => {
    if (!isPlaying) {
      await setSong(track);
      await handlePlaying();
    } else {
      await handlePausing();
    }
  };

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
            {/* <Link
              style={{ pointerEvents: "visible" }}
              to={{ pathname: `/music/${t.id}` }}
              state={{ song: t, listSong: songLists }}
            > */}
            <MusicCard
              onClick={() => handleClick(t)}
              track={t}
              onMouseEnter={() => setIsMouseHover(true)}
              // onMouseLeave={() => setIsMouseHover(false)}
            />
            {/* </Link> */}
            <CircleButton
              className={clsx(
                `
                bg-green-500 z-[88888] absolute right-5 top-32 w-10 h-10`,
                isMouseHover ? "block" : "hidden"
              )}
              // onMouseEnter={handleMouseHover(true)}
              onClick={setTrackToPlay(t)}
              LeftIcon={iconClass}
              iconClassName="text-black text-2xl absolute m-auto top-0 right-0 bottom-0 left-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListSong;
