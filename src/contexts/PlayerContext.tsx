import React, {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useEffect,
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
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLMediaElement>(null!);
  const [volume, setVolume] = useState(0.5);
  const [currentSong, setCurrentSong] =
    useState<React.MutableRefObject<HTMLMediaElement>>();
  const [song, setSong] = useState<State>();
  let songDuration = 0;

  songDuration = audioRef.current?.duration;

  //   console.log(audioRef);

  function handlePlaying() {
    audioRef.current?.play();
    audioRef.current.onplay = () => {
      setIsPlaying(true);
    };
    audioRef.current.ontimeupdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
    setCurrentSong(audioRef);
  }

  // const step = audioRef.current?.duration / 60 / 100;
  // console.log(1 / step);
  // console.log(currentTime );

  function handlePausing() {
    audioRef.current?.pause();
    audioRef.current.onpause = () => {
      setIsPlaying(false);
    };
  }

  function handleSeekTime(e: any) {
    audioRef.current.currentTime = (songDuration / PERCENT) * e.target.value;
  }

  function mutedVolume() {
    setIsMuted(true);
    setVolume(0);
  }

  function unMutedVolume() {
    setIsMuted(false);
    setVolume(0.5);
  }

  function handleSeekVolume(e: any) {
    audioRef.current.volume = e.target.value;
    setVolume(e.target.value);
    audioRef.current.onvolumechange = () => {};
  }

  function handleLoop() {
    setIsLoop(!isLoop);
    audioRef.current.loop = true;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <PlayerContext.Provider
      value={{
        song,
        isPlaying,
        currentTime,
        handlePlaying,
        songDuration,
        // step,
        handlePausing,
        handleSeekTime,
        mutedVolume,
        unMutedVolume,
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
