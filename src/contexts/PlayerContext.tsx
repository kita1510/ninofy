import React, {
  createContext,
  ReactNode,
  useContext,
  useRef,
  useState,
} from "react";
import { PERCENT } from "../constants";
import { SongProps, Track } from "../types";

type State = {
  state: Track;
  setState: React.Dispatch<React.SetStateAction<Track | undefined>>;
};
const PlayerContext = createContext<SongProps>(null!);

const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const audioRef = useRef<HTMLMediaElement>(null!);
  const [volume, setVolume] = useState(0.5);
  const [currentSong, setCurrentSong] =
    useState<React.MutableRefObject<HTMLMediaElement>>();
  const [song, setSong] = useState<any>();

  const songDuration = audioRef.current?.duration || 0;

  //   console.log(audioRef);

  const playSong = () => {
    audioRef.current?.play();
    audioRef.current.onplay = () => {
      setIsPlaying(true);
    };
    audioRef.current.ontimeupdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
    setCurrentSong(audioRef);
  };

  // const step = audioRef.current?.duration / 60 / 100;
  // console.log(1 / step);
  // console.log(currentTime );

  const handlePausing = () => {
    audioRef.current?.pause();
    audioRef.current.onpause = () => {
      setIsPlaying(false);
    };
  };

  const handleSeekTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekValue = +e.target.value;
    if (audioRef.current && songDuration) {
      const newTime = (songDuration / PERCENT) * seekValue;
      audioRef.current.currentTime = newTime;
    }
  };

  const toggleMute = () => {
    setIsMuted((prevIsMuted) => {
      const newMutedState = !prevIsMuted;
      setVolume(newMutedState ? 0 : 0.5);
      return newMutedState;
    });
  };

  const handleSeekVolume = (e: any) => {
    audioRef.current.volume = e.target.value;
    setVolume(e.target.value);
    audioRef.current.onvolumechange = () => {};
  };

  const handleLoop = () => {
    if (audioRef.current) {
      audioRef.current.loop = !audioRef.current.loop;
      setIsLoop(audioRef.current.loop);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        song,
        isPlaying,
        currentTime,
        playSong,
        songDuration,
        // step,
        handlePausing,
        handleSeekTime,
        toggleMute,
        handleSeekVolume,
        handleLoop,
        audioRef,
        currentSong,
        setSong,
        volume,
        isLoop,
        isMuted,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;

export const usePlayer = () => {
  return useContext<SongProps>(PlayerContext);
};
