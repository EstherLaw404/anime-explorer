import { Anime } from "../../anime/types/anime";

export interface FavoriteState {
  favorites: Anime[];
  addFavorite: (anime: Anime) => void;
  removeFavorite: (mal_id: number) => void;
  isFavorite: (mal_id: number) => boolean;
}
