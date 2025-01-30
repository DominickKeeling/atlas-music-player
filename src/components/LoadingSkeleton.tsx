import PlayBack from "../assets/rewind.svg";
import PlayControl from "../assets/playcontrol.svg";
import Forward from "../assets/fastforward.svg";
import Shuffle from "../assets/shuffle.svg";
import Mute from "../assets/audio.svg";
import VolumeSlider from "../assets/volumeslider.png";

export default function LoadingSkeleton() {
  return (
    <div role="status" className="music-player flex flex-col md:flex-row w-full h-screen min-h-screen border-2 border-hover dark:bg-darkBackground dark:border-accent dark:text-accent animate-pulse items-stretch">
      {/* Currently Playing Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:border-r-2 md:border-hover md:dark:border-accent border-b-2 md:border-b-0 border-hover p-4 pt-4 pr-4 flex-grow">
        <div className="w-full aspect-square bg-skeletonLight dark:bg-skeletonDark rounded-lg"></div> {/* Perfect Square */}

        {/* ✅ MATCHED EXACTLY TO YOUR EXAMPLE */}
        <div className="self-start w-1/3 mt-6"> {/* Reduced width */}
          <div className="h-8 bg-skeletonLight dark:bg-skeletonDark w-full rounded mb-4"></div>
          <div className="h-6 bg-skeletonLight dark:bg-skeletonDark w-full rounded mb-6"></div>
        </div>

        {/* Play Controls (Same Width as Cover Art) */}
        <div className="w-[90%] flex flex-col items-center">
          <div className="w-full flex justify-between items-center mt-4">
            <button className="w-1/5">
              <img src={PlayBack} alt="Rewind" />
            </button>
            <button className="w-1/5">
              <img src={PlayControl} alt="Play/Pause" />
            </button>
            <button className="w-1/5">
              <img src={Forward} alt="Fast Forward" />
            </button>
            <button className="w-1/5">
              <img src={Shuffle} alt="Shuffle" />
            </button>
          </div>

          {/* Mute & Volume Section */}
          <div className="w-full flex flex-col items-center mt-4">
            <button className="w-[15%]">
              <img src={Mute} alt="Mute" />
            </button>
            <div className="w-[90%] h-8 mt-2">
              <img src={VolumeSlider} alt="Volume Slider" />
            </div>
          </div>
        </div>
      </div>

      {/* Playlist Section (Now Has 10 Items with Smaller Song Length) */}
      <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow justify-center">
        <div className="h-10 bg-skeletonLight dark:bg-skeletonDark w-40 rounded mb-6"></div>

        {/* Playlist Items */}
        <div className="space-y-4">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="w-full flex flex-col space-y-1">
              {/* Row: Song Title & Song Length */}
              <div className="flex justify-between items-center">
                <div className="h-6 bg-skeletonLight dark:bg-skeletonDark w-1/2 rounded"></div> {/* Song Title (Shorter) */}
                <div className="h-4 bg-skeletonLight dark:bg-skeletonDark w-1/12 rounded"></div> {/* Song Length (Smaller) */}
              </div>
              {/* Row: Artist Name */}
              <div className="h-5 bg-skeletonLight dark:bg-skeletonDark w-1/4 rounded"></div> {/* Artist (Compact) */}
            </div>
          ))}
        </div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
