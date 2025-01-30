import { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

type Song = {
  id: string;
  title: string;
  artist: string;
  duration: number;
  cover: string;
  song: string;
};

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  useEffect(() => {
    async function fetchPlaylist() {
      try {
        const response = await fetch("http://localhost:5173/api/v1/playlist");
        const data: Song[] = await response.json();
        setPlaylist(data);
        if (data.length > 0) setCurrentSong(data[0]);
      } catch (error) {
        console.error("ERROR FETCHING PLAYLIST:", error);
      }
    }
    fetchPlaylist();
  }, []);


  return (
    <div className="music-player items-center border-2 border-hover dark:bg-darkBackground dark:border-accent dark:text-accent flex flex-col md:flex-row justify-center h-auto gap-4 p-0">
      <div className="w-full md:w-1/2 md:border-r-2 md:border-hover md:dark:border-accent md:pr-6 border-b-2 md:border-b-0 border-hover p-4">
        <CurrentlyPlaying  currentSong={currentSong} />
      </div>
      <div className="w-full h-full md:w-1/2 p-4">
        <Playlist playlist={playlist} setCurrentSong={setCurrentSong} />
      </div>
    </div>
  )
}
