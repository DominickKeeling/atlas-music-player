import CoverArtPlaceholder from "../assets/placeholder.svg";

type Song = {
  id: number;
  title: string;
  artist: string;
  duration: string;
  url: string;
  coverArt?: string;
};

type CoverArtProps = {
  currentSong: Song | null;
};

export default function CoverArt({ currentSong }: CoverArtProps) {
  console.log(CoverArtPlaceholder);
  return (
    <div className="cover-art w-full rounded-lg"> **/mb-2 flex-none verflow-visible?**
      <img src={currentSong?.url || CoverArtPlaceholder} alt="Cover Art" />
    </div>
  )
}