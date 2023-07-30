import axios from "axios";
import { useState } from "react";
import config from "../config";
import { useSpotify } from "../contexts/SpotifyContext";

const clientId = config.spotifyId;
const clientSecret = config.spotifySecret;
var accessToken = "";
const url = "https://accounts.spotify.com/api/token";

const authParameter = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body:
    "grant_type=client_credentials&client_id=" +
    clientId +
    "&client_secret=" +
    clientSecret,
};

const getAccessToken = () => {
  fetch(url, authParameter)
    .then((res) => res.json())
    .then((res) =>
      localStorage.setItem("spotifyToken", JSON.stringify(res?.access_token))
    );
};

setInterval(() => {
  getAccessToken();
}, 1000 * 60 * 60);

getAccessToken();

// console.log(JSON.parse(localStorage.getItem("spotifyToken") as string));

const client = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization:
      "Bearer " + JSON.parse(localStorage.getItem("spotifyToken") as string),
  },
});

const getAlbum = () => {};

const getPlaylist = async () => {
  const playlistId = "5WMHtxQfNI682Uh3OfsJiT";
  const playlist = await client.get(`/playlists/${playlistId}`);
  return playlist;
};

export { getAlbum, getPlaylist };
