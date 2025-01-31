import { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import AudioPlayer from "./AudioPlayer";

type Song = {
  id: string;
  title: string;
  artist: string;
  duration: number;
  cover: string;
  song: string;
};

export default function MusicPlayer() {
/* const API_URL = window.location.hostname === "localhost"
? "http://localhost:5173"
: "";
*/

  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

  useEffect(() => {
    async function fetchPlaylist() {
      try {
        const response = await fetch(`http://localhost:5173/api/v1/playlist`); //add ${API_URL}
        const data: Song[] = await response.json();
        console.log("Fetched Playlist Data:", data);
        setPlaylist(data);
        if (data.length > 0) setCurrentSong(data[0]);
      } catch (error) {
        console.error("ERROR FETCHING PLAYLIST:", error);
      }
    }
    fetchPlaylist();
  }, []);

  const nextSong = () => {
    if (!currentSong) return;
    const index = playlist.findIndex((song) => song.id === currentSong.id);
    if (index !== -1 && index < playlist.length - 1) {
      setCurrentSong(playlist[index + 1]);
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <div className="music-player items-center border-2 border-hover ?dark:bg-darkBackground rounded-3xl shadow-2xl bg-background dark:bg-darkBackground dark:border-accent dark:text-accent flex flex-col md:flex-row justify-center h-auto gap-4 p-0">
      <div className="w-full md:w-1/2 md:border-r-2 md:border-hover md:dark:border-accent md:pr-6 border-b-2 md:border-b-0 border-hover p-4">
        <CurrentlyPlaying currentSong={currentSong} isPlaying={isPlaying} togglePlayPause={() => setIsPlaying((prev) => !prev)}
        setPlaybackSpeed={setPlaybackSpeed} />
      </div>
      <div className="w-full h-full md:w-1/2 p-4">
        <Playlist
          playlist={playlist}
          currentSongId={currentSong?.id || ""}
          onSelectSong={(songId) => setCurrentSong(playlist.find((s) => s.id === songId) || null)}
        />
      </div>
      <AudioPlayer currentSong={currentSong?.song ? currentSong.song : null} isPlaying={isPlaying} volume={volume} playbackSpeed={playbackSpeed} />
    </div>
  );
}
