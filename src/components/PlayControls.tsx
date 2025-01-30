import PlayBack from "../assets/rewind.svg";
import PlayControl from "../assets/playcontrol.svg";
import Forward from "../assets/fastforward.svg";
import Shuffle from "../assets/shuffle.svg";
import Mute from "../assets/audio.svg";
import VolumeSlider from "../assets/volumeslider.png"; 

console.log("PlayControl", PlayControl);
console.log("Forward", Forward);
console.log("Shuffle", Shuffle);
console.log("Mute", Mute);

export default function PlayControls() {
  return (
    <div className="playcontrols pt-2 pb-2">
      <div className="play-controls justify-between flex gap-2 pb-2 pl-2 pr-2 dark:bg-darkBackground">
        <button className="speed-button text-2xl dark:text-secondary">1x</button>
        <button className="play-back">
          <img className="h-8" src={PlayBack} alt="Play Back"></img>
        </button>
        <button className="play-control">
          <img className="h-14" src={PlayControl} alt="Play/Pause"></img>
        </button>
        <button className="forward-button">
          <img className="h-8" src={Forward} alt="Forward/Skip"></img>
        </button>
        <button className="shuffle-button">
          <img className="h-7" src={Shuffle} alt="Shuffle"></img>
        </button>
      </div>
      <div className="volume-controls flex justify-between dark:bg-darkBackground">
        <button className="mute-button flex-shrink-0">
          <img className="h-6" src={Mute} alt="Mute"></img>
        </button>
        <button className="volume-slider flex-shrink">
          <img className="w-100 h-8" src={VolumeSlider} alt="Volume Slider"></img>
        </button>
      </div>
    </div>
  )
}