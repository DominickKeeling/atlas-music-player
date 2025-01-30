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
    console.log("Audio Player Props:", { currentSong, isPlaying, volume, playbackSpeed });
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.play().catch((err) => console.error("Error playing audio:", err));
    } else {
      console.log("PLAYBACK PAUSED");
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100; 
      console.log("VOLUME UPDATED:", volume);
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
      console.log("PLAYBACK SPEED UPDATED:", playbackSpeed);
    }
  }, [playbackSpeed]);

  return (
    <audio ref={audioRef} src={currentSong ? `http://localhost:5173/api/v1/songs/${currentSong}` : undefined} />
  );
}
