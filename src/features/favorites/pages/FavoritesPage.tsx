import { useFavoriteStore } from "../store/favorites.store";
import { AnimeGrid } from "../../anime/components/AnimeGrid";

export function FavoritesPage() {
  const { favorites } = useFavoriteStore();

  if (favorites.length === 0) return <p className="p-4">No favorites yet 😢</p>;

  return <AnimeGrid anime={favorites} />;
}
