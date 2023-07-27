import { User } from "@supabase/supabase-js";
import { ChangeEvent } from "react";

export interface SongProps {
  id: number;
  isPlaying: boolean;
  isMuted: boolean;
  song: Track ;
  setSong: React.Dispatch<React.SetStateAction<Track>>;
  handlePlaying: () => void;
  handlePausing: () => void;
  songDuration: number;
  currentTime: number;
  mutedVolume: () => void;
  unMutedVolume: () => void;
  audioRef: any;
  progress: number;
  volume: number;
  handleSeekTime: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSeekVolume: (e: ChangeEvent<HTMLInputElement>) => void;
  handleLoop: () => void;
  isLoop: boolean;
  step: number;
}

export type AdditionalUser = User & {
  avatar_url: string;
  username: string;
};

export interface Track {
  id: string | number;
  title: string;
  album?: string;
  duration?: string;
  genre?: string;
  images: string;
  singer: string;
  audio: string;
  artist?: string;
}
