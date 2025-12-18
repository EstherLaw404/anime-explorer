import axios from "axios";
import { Anime } from "../types/anime";

export const fetchAnimeList = async (page = 1, genreId = 1): Promise<Anime[]> => {
  try {
    const res = await axios.get("https://api.jikan.moe/v4/anime", {
      params: {
        page,
        genres: genreId,
      },
    });

    console.log(`Fetched page ${page} (genre=${genreId ?? "all"}):`, res.data.data);
    return res.data.data;
  } catch (error: any) {
    console.error("Error fetching anime list:", error);
    throw error;
  }
};