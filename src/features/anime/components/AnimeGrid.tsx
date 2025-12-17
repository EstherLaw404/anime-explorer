import { Anime } from "../types/anime";
import { AnimeCard } from "./AnimeCard";

export function AnimeGrid({ anime }: { anime: Anime[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {anime.map((a) => (
        <AnimeCard key={a.mal_id} anime={a} />
      ))}
    </div>
  );
}
