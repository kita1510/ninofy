import React, { useContext, useEffect, useMemo, useState } from "react";
import Layout from "../../components/layouts/Layout";
import TrackList from "../../components/playlists/TrackList";
import TransLink from "../../components/shared/TransLink";
import config from "../../config";
import { getAlbum, getPlaylist } from "../../services/spotify";
import { Playlist } from "../../types/spotify";

const HomePage = () => {
  const albums = getAlbum();

  return (
    <Layout>
      <div className="flex gap-6 justify-center flex-col items-center mt-20">
        <TrackList />
      </div>

      <TransLink
        to={"/playlist"}
        className="flex gap-6 justify-center flex-col items-center mt-20"
      >
        <TrackList />
      </TransLink>
      <div className="pb-40"></div>
    </Layout>
  );
};

export default HomePage;
