import axios from "axios";

export const fetchAnimeList = async () => {
  try {
    const res = await axios.get("https://api.jikan.moe/v4/anime");

    console.log("Full response:", res);
    console.log("Response data:", res.data);
    console.log("Anime list:", res.data.data);

    return res.data.data;
  } catch (error) {
    console.error("Error fetching anime list:", error);
    throw error;
  }
};