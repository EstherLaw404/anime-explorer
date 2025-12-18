import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { Anime } from "../types/anime";

export function useAnime() {
  const [anime, setAnime] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const hasMoreRef = useRef(true);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Keep ref in sync
  useEffect(() => {
    hasMoreRef.current = hasMore;
  }, [hasMore]);

  // Fetch anime function
  const fetchAnime = useCallback(async () => {
    if (!hasMoreRef.current) return;

    setLoading(true);
    try {
      const res = await axios.get(`https://api.jikan.moe/v4/anime?page=${page}`);

      setAnime((prev) => {
        const newAnime = res.data.data.filter(
          (a: Anime) => !prev.some((p) => p.mal_id === a.mal_id)
        );
        return [...prev, ...newAnime];
      });

      setHasMore(res.data.pagination.has_next_page);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  // Fetch whenever page changes
  useEffect(() => {
    fetchAnime();
  }, [fetchAnime]);

  // Intersection Observer
  useEffect(() => {
    const node = loadMoreRef.current; // copy ref to local variable
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMoreRef.current && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: "200px" } // load before reaching bottom
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node); // cleanup
    };
  }, [loading]); // we can keep loading as dependency for safety

  return { anime, loading, loadMoreRef };
}
