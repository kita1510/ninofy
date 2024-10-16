import React from "react";
import { Playlist } from "../../types/spotify";
import Avatar from "./Avatar";
import Dot from "./Dot";
import Image from "./Image";

const PlaylistBanner = ({ playlist, ...props }: { playlist?: Playlist }) => {
  const src =
    "https://mosaic.scdn.co/640/ab67616d0000b273184eaabbec799a167882e065ab67616d0000b273255ca949e450cb675edf715dab67616d0000b273557a1bfa49e5678fbdb73acdab67616d0000b273c21080fb642befe5247ac6bc";
  return (
    <div className="flex gap-5 w-full h-[360px] bg-green-500">
      <div className="w-1/3 ml-10 mt-20">
        <Image
          style={{ width: "250px", height: "250px" }}
          src={src}
        />
      </div>
      <div className="w-2/3 mt-32">
        <div>Playlist</div>
        <div className="font-bold text-6xl">{playlist?.name}</div>
        <div className="mt-5 flex flex-row">
          <Avatar
            className="w-10 h-10 gap-3"
            src="https://i.pinimg.com/564x/84/74/50/847450d185614a6313ac9197a1e3fe13.jpg"
          />
          {/* <Dot></Dot> */}
        </div>
      </div>
    </div>
  );
};

export default PlaylistBanner;
