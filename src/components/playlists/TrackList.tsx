import clsx from "clsx";
import React, { useEffect, useMemo, useState } from "react";
import { GiPauseButton } from "react-icons/gi";
import { ImPlay3 } from "react-icons/im";
import { SiSongkick } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { usePlayer } from "../../contexts/PlayerContext";
import { Track } from "../../types";
import { songLists } from "../../utils/dummyData";
import CircleButton from "../shared/CircleButton";
import MusicCard from "../shared/MusicCard";

const TrackList = () => {
  const { isPlaying, song, setSong, playSong, handlePausing } = usePlayer();
  const navigate = useNavigate();

  const [hoveredTrackId, setHoveredTrackId] = useState<string | number | null>(
    null
  );
  const [activeTrackId, setActiveTrackId] = useState<string | number | null>(
    null
  );

  useEffect(() => {
    const storedActiveTrack = localStorage.getItem("activeTrackId");
    if (storedActiveTrack) {
      setActiveTrackId(storedActiveTrack);
    }
  }, []);

  // console.log(activeTrackId);

  const setTrackToPlay = (track: Track) => async () => {
    if (!song || song.id !== track.id) {
      await setSong(track);
      await playSong();
      setActiveTrackId(track.id);
      localStorage.setItem("activeTrackId", track.id + "");
      return;
    }

    if (isPlaying) {
      await handlePausing();
      setActiveTrackId(null);
      localStorage.removeItem("activeTrackId");
      return;
    }

    await playSong();
    setActiveTrackId(track.id);
    localStorage.setItem("activeTrackId", track.id + "");
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
        {songLists.map((t) => {
          // const isCurrentSong = song?.id === t.id;
          const isHovered = hoveredTrackId === t.id;
          const isActive = activeTrackId === t.id;

          return (
            <div
              key={t.id}
              className="flex relative"
              onMouseEnter={() => setHoveredTrackId(t.id)}
              onMouseLeave={() => setHoveredTrackId(null)}
            >
              <MusicCard onClick={() => handleClick(t)} track={t} />
              {(isHovered || isActive) && (
                <div className="" onClick={setTrackToPlay(t)}>
                  <CircleButton
                    className={clsx(
                      `
                  bg-green-500 z-[8] absolute right-5 top-32 w-10 h-10`
                    )}
                    LeftIcon={
                      !isPlaying || activeTrackId !== t.id
                        ? ImPlay3
                        : GiPauseButton
                    }
                    iconClassName="text-black text-2xl absolute m-auto top-0 right-0 bottom-0 left-0"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrackList;
