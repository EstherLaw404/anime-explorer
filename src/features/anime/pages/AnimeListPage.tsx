import { useAnime } from "../hooks/useAnime";
import { AnimeGrid } from "../components/AnimeGrid";
import { Loader } from "../../../shared/ui/Loader";

export function AnimeListPage() {
  const { anime, loading, loadMoreRef } = useAnime();

  return (
    <>
      <AnimeGrid anime={anime} />
      {loading && <Loader />}
      <div ref={loadMoreRef} /> {/* Sentinel element */}
    </>
  );
}
