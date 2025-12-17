import axios from "axios";

export const fetchAnimeList = async () => {
  const res = await axios.get("https://api.jikan.moe/v4/anime");
  return res.data.data; // ✅ return only the array
};