import { useNavigate } from "react-router-dom";
import { Anime } from "../types/anime";

export function AnimeCard({ anime }: { anime: Anime }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/anime-detail", { state: { anime } });
  };

  return (
    <div className="cursor-pointer border p-2 rounded" onClick={handleClick}>
      <img src={anime.images?.jpg?.image_url} alt={anime.title} loading="lazy" />
      <h3 className="font-bold">{anime.title}</h3>
      {anime.score && <p>Score: {anime.score}</p>}
    </div>
  );
}
