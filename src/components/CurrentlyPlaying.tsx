import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";

export default function CurrentlyPlaying() {
  return (
    <div className="currently-playing w-full flex-col justify-center mb-6">
      <CoverArt />
      <SongTitle />
      <PlayControls />
    </div>
  )
}