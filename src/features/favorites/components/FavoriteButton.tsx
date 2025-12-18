import { useFavoriteStore } from "../store/favorites.store";
import { Anime } from "../../anime/types/anime";

export function FavoriteButton({ anime }: { anime: Anime }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore();
  const favorite = isFavorite(anime.mal_id);

  const toggleFavorite = () => {
    if (favorite) removeFavorite(anime.mal_id);
    else addFavorite(anime);
  };

  return (
    <button
      className={`absolute top-2 right-2 z-10 w-10 h-10 flex items-center justify-center text-2xl ${favorite ? "text-red-500" : "text-gray-400"}`}
      onClick={toggleFavorite}
    >
      {favorite ? "❤️" : "🤍"}
    </button>
  );
}