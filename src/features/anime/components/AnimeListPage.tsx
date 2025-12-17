import { useAnime } from "../hooks/useAnime";
import { AnimeGrid } from "../components/AnimeGrid";
import { Loader } from "../../../shared/ui/Loader";

export function AnimeListPage() {
  const { anime, loading } = useAnime();

  if (loading) return <Loader />;

  return <AnimeGrid anime={anime} />;
}
