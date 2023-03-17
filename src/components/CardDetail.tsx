import React, { useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useLocation } from "react-router-dom";
import { GrPlayFill } from "react-icons/gr";
import Button from "./Button";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { AiOutlineEllipsis, AiOutlineHeart } from "react-icons/ai";

const CardDetail = () => {
  const song = useLocation();
  console.log(song);

  const handlePlay = (e) =>{
    
  }
  

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="flex">
      <div className="w-[20%] fixed z-20">
        <Sidebar />
      </div>
      <div className="w-[80%] absolute right-0">
        <Navbar active={true}/>
        <div className="w-full h-[400px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
          <div className="">
            <div className="w-[25%] h-full absolute top-0 left-0">
              <img
                className="w-52 h-52 rounded-full absolute bottom-14 left-14 object-cover object-center"
                src={song.state.song.image}
                alt=""
              />
            </div>
            <div className="w-[75%] absolute right-0 h-full bottom-0">
              <div className="absolute bottom-60 left-5 font-semibold text-white ">
                Song
              </div>
              <div className="absolute bottom-32 left-10 font-bold text-[50px] text-white ">
                {song.state.song.nameSong}
              </div>
              <div className="absolute bottom-10 left-5 font-semibold text-1xl text-white ">
                {song.state.song.singer}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full absolute h-[200px] bg-gradient-to-b from-pink-600 via-pink-900 px-12 py-10">
          <Button classNames="w-[56px] h-[56px] rounded-full bg-green-400 absolute flex justify-center items-center">
            <GrPlayFill className={``} size={20} />
          </Button>
          <AiOutlineHeart
            className="absolute left-36 top-12"
            size={40}
            color={"white"}
          />
          <AiOutlineEllipsis
            className="absolute left-56 top-12"
            size={40}
            color={"white"}
          />
          <ReactAudioPlayer src={song.state.song.audio} autoPlay/>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
