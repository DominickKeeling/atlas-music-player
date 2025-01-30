import { PlayListItem } from "./PlayListItem";

export default function Playlist() {
  return (
    <div className="flex flex-col justify-start w-full h-full p-0 dark:bg-darkBackground dark:text-darkText">
      <h1 className="text-2xl font-bold pb-4 text-secondary">Playlist</h1>
      <PlayListItem title="Painted in Blue" artist="Soul Canvas" songLength="8:41" />
      <PlayListItem title="Tidal Drift" artist="Echos of the Sea" songLength="8:02" />
      <PlayListItem title="Fading Shadows" artist="The Emberlight" songLength="3:01" />
      <PlayListItem title="Cosmic Drift" artist="Solar Flare" songLength="5:01" />
      <PlayListItem title="Urban Serenade" artist="Midnight Groove" songLength="4:54" />
      <PlayListItem title="Whispers in the Wind" artist="Rust & Ruin" songLength="6:13" />
      <PlayListItem title="Electric Fever" artist="Neon Jungle" songLength="8:41" />
      <PlayListItem title="Edge of the Abyss" artist="Steel Horizon" songLength="2:27" />
      <PlayListItem title="Golden Haze" artist="Velvet Waves" songLength="3:15" />
      <PlayListItem title="Shatter the Silence" artist="Thunderclap Echo" songLength="8:22" />
    </div>
  )
}