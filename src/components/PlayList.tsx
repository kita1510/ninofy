import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SpotifyWebApi from "react-spotify-web-playback";

const PlayList = () => {
  const [accessToken, setAccessToken] = useState("")
  const [playlists, setPlayLists] = useState();
  console.log(accessToken)
  async function getPlayList() {
    const data = await axios.get("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: "Bearer" + accessToken,
        Accept: "application/json",
      },
    });
    setPlayLists(data);
  }

  useEffect(()=>{
    const code = new URLSearchParams(window.location.search).get("code");
    setAccessToken(code)
  },[])

  console.log(accessToken)

  useEffect(() => {
    getPlayList();

    return () => {};
  }, []);

  console.log(playlists);

  // const { data: playlist } = useQuery({
  //   queryKey: ["playlist"],
  //   queryFn: async () => {
  //     await getPlayList;
  //   },
  // });

  // console.log(playlist);

  return <div>{/* <SpotifyWebApi token={accessToken}></SpotifyWebApi> */}</div>;
};

export default PlayList;
