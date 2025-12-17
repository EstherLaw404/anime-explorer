import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Anime } from "../types/anime";

export function useAnime() {
  const [anime, setAnime] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const hasMoreRef = useRef(true);

  // keep ref in sync
  useEffect(() => {
    hasMoreRef.current = hasMore;
  }, [hasMore]);

  // fetch data when page changes
  useEffect(() => {
    const loadAnime = async () => {
      if (!hasMoreRef.current) return;

      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.jikan.moe/v4/anime?page=${page}`
        );

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
    };

    loadAnime();
  }, [page]); // ✅ eslint happy

  // infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !loading &&
        hasMoreRef.current
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return { anime, loading };
}
