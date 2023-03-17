import React, { useEffect, useState } from "react";
// import spotifyAPI from "../services/spotify";
import SpotifyPlayer from "react-spotify-web-playback";
import axios from "axios";

const SongList = () => {
  const clientId = "5bbfc9b0510d4a2dbc99c5d0e20d26ba";
  const redirectUrl = "http://localhost:5173/";
    // "https://bdchptgaygdfvzcvzasr.supabase.co/auth/v1/callback";
  const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];
  const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    "%20"
  )}&response_type=code&show_dialog=true`;
  console.log(url);
  // window.location.href = url;
  return <div>
    <a className="text-white" href={url}>Login </a>
  </div>;
};

export default SongList;
