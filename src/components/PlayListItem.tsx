type PlayListItemProps = {
  title: string;
  artist: string;
  songLength: string;
  isActive?: boolean;
  onClick?: () => void;
};

export default function PlayListItem({ title, artist, songLength, isActive, onClick }: PlayListItemProps) {
  return (
    <div
      className={`playlist-item w-full pb-2 rounded dark:bg-darkBackground dark:text-darkText ${
        isActive ? "bg-hover dark:bg-hover" : "hover:bg-hover dark:hover:bg-hover"
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between">
        <div className="song-title font-bold text-accent dark:text-accent">{title}</div>
        <div className="song-length font-bold text-secondary">{songLength}</div>
      </div>
      <div className="artist-name font-bold text-secondary">{artist}</div>
    </div>
  );
}
