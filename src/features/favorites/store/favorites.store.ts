import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FavoriteState } from "../types/favorites"; 

export const useFavoriteStore = create<FavoriteState>()(
    persist(
      (set, get) => ({
        favorites: [],
        addFavorite: (anime) =>
          set((state) => ({
            favorites: [...state.favorites, anime],
          })),
        removeFavorite: (mal_id) =>
          set((state) => ({
            favorites: state.favorites.filter((a) => a.mal_id !== mal_id),
          })),
        isFavorite: (mal_id) =>
          get().favorites.some((a) => a.mal_id === mal_id),
      }),
      { name: "favorites-storage" }
    )
  );
