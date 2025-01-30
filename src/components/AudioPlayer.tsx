import { useEffect, useRef } from "react";

type AudioPlayerProps = {
  currentSong: string | null;
  isPlaying: boolean;
  volume: number;
  playbackSpeed: number;
};

export default function AudioPlayer({ currentSong, isPlaying, volume, playbackSpeed }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [volume, playbackSpeed]);

  useEffect(() => {
    if (audioRef.current && currentSong) {
      console.log("UPDADTING AUDIO RESOURCE:", currentSong);
      audioRef.current.src = currentSong;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch((error) => console.error("Error playing audio:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying && currentSong) {
        console.log("Playing:", currentSong);
        audioRef.current.play().catch((error) => console.error("🚨 Error playing audio:", error));
      } else {
        console.log("Pausing audio");
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  return (
    <div>
      {currentSong ? (
      <audio ref={audioRef} src={currentSong} controls />
      ) : (
        <p>No song loaded</p>
      )}
    </div>
  );
}
