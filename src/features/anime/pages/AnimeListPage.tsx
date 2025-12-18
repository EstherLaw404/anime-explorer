import { useAnime } from "../hooks/useAnime";
import { AnimeGrid } from "../components/AnimeGrid";
import { Loader } from "../../../shared/ui/Loader";
import { useGenres } from "../hooks/useGenres";
import { GenreFilter } from "../components/GenreFilter";
import { useState } from "react";

export function AnimeListPage() {
  
  const [genreId, setGenreId] = useState<number | undefined>();
  const { genres } = useGenres();
  const { anime, loading, loadMoreRef } = useAnime(genreId);

  return (
    <>
      {/* Filter */}
      <div className="mb-4 flex gap-4">
        <GenreFilter
          genres={genres}
          value={genreId}
          onChange={setGenreId}
        />
      </div>

      <AnimeGrid anime={anime} />
      {loading && <Loader />}
      <div ref={loadMoreRef} /> {/* Sentinel element */}
    </>
  );
}
