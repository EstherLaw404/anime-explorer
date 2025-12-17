import { Anime } from "../types/anime";

export function AnimeCard({ anime }: { anime: Anime }) {
  return (
    <div className="border p-2 rounded">
      <img
        src={anime.images?.jpg?.image_url}
        alt={anime.title}
        loading="lazy"
      />
      <h3 className="font-bold">{anime.title}</h3>
    </div>
  );
}
