import { create } from "zustand";
import { fetchAnimeList } from "../api/anime.api";

import { Anime } from "../types/anime";

interface AnimeState {
  anime: Anime[];
  loading: boolean;
  load: () => Promise<void>;
}

export const useAnimeStore = create<AnimeState>((set) => ({
  anime: [],
  loading: false,
  load: async () => {
    set({ loading: true });
    const anime = await fetchAnimeList();
    set({ anime, loading: false });
  },
}));
