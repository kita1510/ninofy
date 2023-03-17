import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ReactAudioPlayer from "react-audio-player";
import { useAccessToken } from "../contexts/SpotifyContext";

const PlayList = () => {
  const accessToken = useAccessToken();
  async function getPlayList() {
    const data = await axios.get(
      "https://api.spotify.com/v1/episodes?ids=77o6BIVlYM3msb4MMIL1jH%2C0Q86acNRm6V9GYx55SXKwf&market=ES",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      }
    );
    return data?.data?.episodes;
  }

  console.log(accessToken);

  const { data: episodes = [] } = useQuery({
    queryKey: ["episodes"],
    queryFn: getPlayList,
  });
  console.log(episodes);

  return (
    <div className="w-full h-[800px] bg-white flex gap-10">
      {episodes?.map((e) => {
        return (
          <div className="flex gap-10 flex-col">
            <img
              className="w-[320px] h-[320px]"
              src={e?.images[0]?.url}
              alt=""
            />
            <ReactAudioPlayer className="bg-transparent w-40" src={e?.audio_preview_url} autoPlay controls />
          </div>
        );
      })}
    </div>
  );
};

export default PlayList;
