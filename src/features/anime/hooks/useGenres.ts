import { useEffect, useState } from "react";
import axios from "axios";

export interface Genre {
  mal_id: number;
  name: string;
}

export function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.jikan.moe/v4/genres/anime")
      .then((res) => setGenres(res.data.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { genres, loading };
}
