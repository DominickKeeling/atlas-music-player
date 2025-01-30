import { useState, useEffect } from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";

type Song = {
  id: string;
  title: string;
  artist: string;
  duration: number;
  cover: string;
  song: string;
};

type CurrentlyPlayingProps = {
  currentSong: Song | null;
  isPlaying: boolean;
  togglePlayPause: () => void;
  setPlaybackSpeed: (speed: number) => void;
};

export default function CurrentlyPlaying({ currentSong }: CurrentlyPlayingProps) {
  return (
    <div className="currently-playing w-full flex-col justify-center mb-6">
      <CoverArt currentSong={currentSong} />
      <SongTitle currentSong={currentSong} />
      <PlayControls />
    </div>
  )
}