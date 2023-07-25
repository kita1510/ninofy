import { User } from "@supabase/supabase-js";
import { ChangeEvent } from "react";

export interface SongProps {
  id: number;
  song: string;
  songImage: string;
  songName: string;
  singer: string;
  audio: string;
  isPlaying: boolean;
  isMuted: boolean;
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
  handleSeekVolume: (e: any) => void;
  handleLoop: () => void;
  isLoop: boolean;
  step: number;
}

export type AdditionalUser = User & {
  avatar_url: string;
  username: string;
};
