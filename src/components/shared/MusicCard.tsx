/** @format */

import { Card, Avatar, Typography } from "@material-tailwind/react";
import { SongProps, Track } from "../../types";

function MusicCard({ id, images, title, singer, ...props }: Track) {
  return (
    <Card className="h-64 w-44 relative bg-spotify-200 flex flex-col p-4 gap-1 cursor-pointer rounded-md transition-duration-300 hover:bg-spotify-500 card">
      <Avatar className="w-36 h-36 " src={images} />

      <div className="text-white font-bold text-[1rem] mt-3 text-2xl">
        {title}
      </div>
      <div className="text-spotify-400 text-[0.875rem] font-semibold">
        {singer}
      </div>
    </Card>
  );
}

export default MusicCard;
