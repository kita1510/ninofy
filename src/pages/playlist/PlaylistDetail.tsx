import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { GiPauseButton } from "react-icons/gi";
import { ImPlay3 } from "react-icons/im";
import Layout from "../../components/layouts/Layout";
import CircleButton from "../../components/shared/CircleButton";
import PlaylistBanner from "../../components/shared/PlaylistBanner";
import { usePlayer } from "../../contexts/PlayerContext";
import { getPlaylist } from "../../services/spotify";
import { Track } from "../../types";
import { Playlist } from "../../types/spotify";

const PlaylistDetail = () => {
  const { isPlaying, setSong, playSong, handlePausing } = usePlayer();
  const [playlist, setPlaylist] = useState<Playlist>();

  const setTrackToPlay = (track: Track) => async () => {
    if (!isPlaying) {
      await setSong(track);
      await playSong();
      console.log();
    } else {
      await handlePausing();
    }
  };

  useEffect(() => {
    getPlaylist().then((res) => setPlaylist(res.data));
  }, []);

  console.log(playlist);

  return (
    <Layout>
      <div className="flex flex-col">
        <PlaylistBanner playlist={playlist} />
        <div className="flex flex-col gap-5 w-full h-28 mx-5 justify-center ">
          <CircleButton
            className={clsx(
              `
            bg-green-500`
            )}
            // onMouseEnter={handleMouseHover(true)}
            // onClick={setTrackToPlay(t)}
            LeftIcon={!isPlaying ? ImPlay3 : GiPauseButton}
            iconClassName="text-black text-2xl m-auto"
          />
        </div>
        <div className="w-full h-9 bg-white grid grid-cols-12 px-10">
          <div className="col-span-1">#</div>
          <div className="col-span-4">Title</div>
          <div className="col-span-3">Albums</div>
          <div className="col-span-2">Date added</div>
          <div className="col-span-2"></div>
        </div>
        <div className="w-full min-h-[300px] bg-black"></div>
      </div>
    </Layout>
  );
};

export default PlaylistDetail;
