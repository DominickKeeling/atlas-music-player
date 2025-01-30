import { useState, useEffect } from "react";
import CoverArtPlaceholder from "../assets/placeholder.svg";

type Song = {
  id: string;
  title: string;
  artist: string;
  duration: number;
  cover: string;
  song: string;
};

type CoverArtProps = {
  currentSong: Song | null;
};

export default function CoverArt({ currentSong }: CoverArtProps) {
  const [coverArt, setCoverArt] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCover() {
      if (!currentSong) return;

      try {
        const response = await fetch(`http://localhost:5173/api/v1/songs/${currentSong.id}`);
        const data = await response.json();
        console.log("Fetched Song Data:", data);
        setCoverArt(data.cover || null);
      } catch (error) {
        console.error("ERRROR FETCHING SONG DETAILS:", error);
      }
    }
    fetchCover();
  }, [currentSong]);

  console.log(CoverArtPlaceholder);

  return (
    <div className="cover-art w-full rounded-lg">
      <img
        src={
          coverArt
            ? (coverArt.startsWith("http") ? coverArt : `http://localhost:5173${coverArt}`)
            : CoverArtPlaceholder
        }
        alt="Cover Art"
        className="w-full h-auto rounded-lg object-cover"
      />
    </div>
  )
}