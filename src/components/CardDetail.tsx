import React from "react";
import { useLocation } from "react-router-dom";

const CardDetail = () => {
  const song = useLocation();
  console.log(song);
  return (
    <div className="bg-white">
      <div>{song.state.song.nameSong}</div>
      <img src={song.state.song.image} alt="" />
    </div>
  );
};

export default CardDetail;
