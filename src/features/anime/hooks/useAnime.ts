import { useEffect } from "react";
import { useAnimeStore } from "../store/anime.store";

export function useAnime() {
  const { anime, loading, load } = useAnimeStore();

  useEffect(() => {
    load();
  }, [load]);

  return { anime, loading };
}
