import { Anime } from "../types/anime";
import { AnimeCard } from "./AnimeCard";

export function AnimeGrid({ anime }: { anime: Anime[] }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {anime.map((a) => (
        <AnimeCard key={a.mal_id} anime={a} />
      ))}
    </div>
  );
}
