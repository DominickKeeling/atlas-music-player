type SongTitleProps = {
  currentSong: {
    title: string;
    artist: string;
  } | null;
};

export default function SongTitle({ currentSong }: SongTitleProps) {
  return (
    <div className="flex flex-col pt-2 pb-2 items-left">
      <h1 className="text-2xl font-bold text-accent dark:text-accent">
        {currentSong ? currentSong.title : "No Song Playing"}
      </h1>
      <p className="text-secondary text-lg dark:text-secondary">
        {currentSong ? currentSong.artist : ""}
      </p>
    </div>
  );
}