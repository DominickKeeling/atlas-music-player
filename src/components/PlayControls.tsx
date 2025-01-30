import { useState } from "react";
import PlayBack from "../assets/rewind.svg";
import PlayControl from "../assets/playcontrol.svg";
import Forward from "../assets/fastforward.svg";
import Shuffle from "../assets/shuffle.svg";
import Mute from "../assets/audio.svg";

type PlayControlsProps = {
  togglePlayPause?: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  onShuffleToggle?: () => void;
  onVolumeChange?: (volume: number) => void;
  onSpeedChange?: (speed: number) => void;
  onMuteToggle?: () => void;
};

export default function PlayControls({
  togglePlayPause,
  onNext,
  onPrev,
  onShuffleToggle,
  onVolumeChange,
  onSpeedChange,
  onMuteToggle,
}: PlayControlsProps) {
  const [speed, setSpeed] = useState(1);

  const speedChange = () => {
    const newSpeed = speed === 0.5 ? 1 : speed === 1 ? 2 : 0.5;
    setSpeed(newSpeed);
    onSpeedChange?.(newSpeed);
  };

  return (
    <div className="playcontrols pt-2 pb-2">
      <div className="play-controls justify-between flex gap-2 pb-2 pl-2 pr-2 dark:bg-darkBackground">
        <button className="speed-button text-2xl dark:text-secondary" onClick={speedChange}>
          {speed}x
        </button>
        <button className="play-back" onClick={onPrev}>
          <img className="h-8" src={PlayBack} alt="Play Back" />
        </button>
        <button className="play-control" onClick={togglePlayPause}>
          <img className="h-14" src={PlayControl} alt="Play/Pause" />
        </button>
        <button className="forward-button" onClick={onNext}>
          <img className="h-8" src={Forward} alt="Forward/Skip" />
        </button>
        <button className="shuffle-button" onClick={onShuffleToggle}>
          <img className="h-7" src={Shuffle} alt="Shuffle" />
        </button>
      </div>
      <div className="volume-controls flex justify-between dark:bg-darkBackground">
        <button className="mute-button flex-shrink-0" onClick={onMuteToggle}>
          <img className="h-6" src={Mute} alt="Mute" />
        </button>
        <input
          type="range"
          min="0"
          max="100"
          className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
          onChange={(e) => onVolumeChange?.(parseInt(e.target.value, 10))}
        />
      </div>
    </div>
  );
}
