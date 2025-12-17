// src/features/anime/types/anime.ts
export interface Anime {
  mal_id: number;
  title: string;
  title_english?: string;
  title_japanese?: string;
  images?: {
    jpg?: { image_url?: string; small_image_url?: string; large_image_url?: string };
    webp?: { image_url?: string; small_image_url?: string; large_image_url?: string };
  };
  synopsis?: string;
  type?: string;
  episodes?: number;
  status?: string;
  aired?: { string?: string };
  duration?: string;
  rating?: string;
  score?: number;
  genres?: { mal_id: number; name: string }[];
  studios?: { mal_id: number; name: string }[];
  producers?: { mal_id: number; name: string }[];
  url?: string;
}
