/** @format */

import { Card, CardProps, Avatar, Typography } from "@material-tailwind/react";
import { Track } from "../../types";

interface MusicCardProps extends Omit<CardProps, "children"> {
  track: Track;
  children?: React.ReactNode;
}

const MusicCard: React.FC<MusicCardProps> = ({ track, children, ...props }) => {
  return (
    <div
      className="h-64 w-44 relative bg-spotify-200 flex flex-col p-4 gap-1 cursor-pointer rounded-md transition-duration-300 hover:bg-spotify-500 card"
      {...props}
    >
      <Avatar className="w-36 h-36 " src={track.images} />
      <div className="text-white font-bold text-[1rem] mt-3 text-2xl">
        {track.title}
      </div>
      <div className="text-spotify-400 text-[0.875rem] font-semibold">
        {track.singer}
      </div>
      {children}
    </div>
  );
};

export default MusicCard;
