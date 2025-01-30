export function PlayListItem({ title, artist, songLength}) {
  return (
    <div className="playlist-item w-full pb-2 hover:bg-hover rounded dark:bg-darkBackground dark:hover:bg-hover dark:text-darkText">
      <div className="flex justify-between">
        <div className="song-title font-bold text-accent dark:text-accent" >{title}</div>
        <div className="song-length font-bold text-secondary">{songLength}</div>
      </div>
      <div className="artist-name font-bold text-secondary">{artist}</div>
    </div>
  )
}