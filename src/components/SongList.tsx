import React, { useEffect, useState } from "react";
import spotifyAPI from "../services/spotify";
import SpotifyPlayer from "react-spotify-web-playback";
import axios from "axios";

const SongList = () => {
  // const spotify = spotifyAPI.getAlbum("4aawyAB9vmqN3uQ7FjRGTy");
  const accessToken =
    "AQAkqzlULxetHA8axvPE85zK9My1njM0I41s5OwOnta7pBMLFeo8i1rDXfdBt6VUuhGZExTajWmATbh5wbdbvtAcjRMnTcwwYflW6cd2EWk8Sqi5pKLf8nKyjUKLbLWvDaU";
  const [artists, setArtists] = useState("");

  async function getArtists() {
    const data = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
    });
    setArtists(data);
  }

  useEffect(() => {
    getArtists();
  }, []);
  console.log(artists);
  console.log(spotifyAPI)
  return (
    <div>
      <SpotifyPlayer token={accessToken} showSaveIcon />
    </div>
  );
};

export default SongList;
