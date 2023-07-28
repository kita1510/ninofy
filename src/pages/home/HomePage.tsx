import React, { useContext, useEffect, useMemo, useState } from "react";
import Layout from "../../components/layouts/Layout";
import ListSong from "../../components/playlists/ListSong";
import config from "../../config";
import { useSpotify } from "../../contexts/SpotifyContext";
import { getAlbum, getPlaylist } from "../../services/spotify";
import { Playlist } from "../../types/spotify";

const HomePage = () => {
  const albums = getAlbum();
  const accessToken = useSpotify();

  const [playlist, setPlaylist] = useState<Playlist>();

  useEffect(() => {
    getPlaylist().then((res) => setPlaylist(res.data));
  }, []);

  return (
    <Layout>
      <div className="flex gap-6 justify-center flex-col items-center mt-20">
        <ListSong />
      </div>
    </Layout>
  );
};

export default HomePage;
