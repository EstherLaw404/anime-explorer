import { useState, useEffect, useRef, useCallback } from "react";
import { Anime } from "../types/anime";
import { fetchAnimeList } from "../api/anime.api";

export function useAnime() {
  const [anime, setAnime] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const hasMoreRef = useRef(true);

  // Keep hasMore ref in sync
  useEffect(() => {
    hasMoreRef.current = hasMore;
  }, [hasMore]);

  // Track fetched pages to prevent double fetch
  const fetchedPagesRef = useRef<Set<number>>(new Set());

  // Fetch a specific page
  const fetchAnimePage = useCallback(
    async (currentPage: number) => {
      if (!hasMoreRef.current || loading) return;
      if (fetchedPagesRef.current.has(currentPage)) return;

      fetchedPagesRef.current.add(currentPage);
      setLoading(true);

      try {
        const data = await fetchAnimeList(currentPage);

        setAnime((prev) => {
          const newAnime = data.filter(
            (a: Anime) => !prev.some((p) => p.mal_id === a.mal_id)
          );
          return [...prev, ...newAnime];
        });

        // Stop if API returns empty data
        setHasMore(data.length > 0);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [loading]
  );

  // Initial fetch (page 1)
  useEffect(() => {
    fetchAnimePage(1);
  }, [fetchAnimePage]);

  // IntersectionObserver for infinite scroll
  useEffect(() => {
    const node = loadMoreRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMoreRef.current && !loading) {
          // fetch current page and then increment page
          fetchAnimePage(page);
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: "200px" } // fetch before reaching bottom
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, [fetchAnimePage, loading, page]);

  return { anime, loading, loadMoreRef };
}
