/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAccessToken } from "../contexts/SpotifyContext";
import { songLists } from "../utils/dummyData";
import MusicCard from "./MusicCard";

const ListSong = () => {
  const [artists, setArtists] = useState("");
  const accessToken = useAccessToken();
  var artistParameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };

  console.log(accessToken);

  async function search() {
    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + "Taylor" + "&type=artist",
      artistParameters
    )
      .then((res) => res.json())
      .then((res) => setArtists(res));
  }

  useEffect(() => {
    search();
  }, []);

  console.log(artists);

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
        {songLists.map((i) => (
          <Link
            to={{ pathname: `/music/${i.id}` }}
            state={{ song: i, listSong: songLists }}
          >
            <MusicCard
              id={i.id}
              songImage={i.songImage}
              songName={i.songName}
              singer={i.singer}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListSong;
