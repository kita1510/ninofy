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
        <div className="flex flex-col gap-5">
          <CircleButton
            className={clsx(
              `
            bg-green-500 z-[8] absolute right-5 top-32 w-10 h-10`
            )}
            // onMouseEnter={handleMouseHover(true)}
            // onClick={setTrackToPlay(t)}
            LeftIcon={!isPlaying ? ImPlay3 : GiPauseButton}
            iconClassName="text-black text-2xl absolute m-auto top-0 right-0 bottom-0 left-0"
          />
        </div>
      </div>
    </Layout>
  );
};

export default PlaylistDetail;
