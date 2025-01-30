import PlayListItem from "./PlayListItem";

type Song = {
  id: string;
  title: string;
  artist: string;
  duration: number;
};

type PlaylistProps = {
  playlist: Song[];
  currentSongId: string;
  onSelectSong: (songId: string) => void;
};

export default function Playlist({ playlist, currentSongId, onSelectSong }: PlaylistProps) {
  return (
    <div className="flex flex-col justify-start w-full h-full p-0 dark:bg-darkBackground dark:text-darkText">
      <h1 className="text-2xl font-bold pb-4 text-secondary">Playlist</h1>
      {playlist.map((song) => (
        <PlayListItem
          key={song.id}
          title={song.title}
          artist={song.artist}
          songLength={formatDuration(song.duration)}
          isActive={song.id === currentSongId}
          onClick={() => onSelectSong(song.id)}
        />
      ))}
    </div>
  );
}

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}
