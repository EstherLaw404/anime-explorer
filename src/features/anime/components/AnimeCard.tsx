import { useNavigate } from "react-router-dom";
import { Anime } from "../types/anime";
import { FavoriteButton } from "../../favorites";

export function AnimeCard({ anime }: { anime: Anime }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/anime-detail", { state: { anime } });
  };

  return (
    <div className="relative cursor-pointer border p-2 rounded overflow-hidden shadow hover:shadow-lg">
      {/* Favorite button at top-right */}
      <div
        className="absolute top-2 right-2 z-10"
        onClick={(e) => e.stopPropagation()} // prevent navigating when clicking favorite
      >
        <FavoriteButton anime={anime} />
      </div>

      {/* Anime image */}
      <img
        src={anime.images?.jpg?.image_url}
        alt={anime.title}
        loading="lazy"
        onClick={handleClick}
        className="w-full h-full object-cover"
      />

      {/* Title & score */}
      <div className="p-2" onClick={handleClick}>
        <h3 className="font-bold">{anime.title}</h3>
        {anime.score && <p>Score: {anime.score}</p>}
      </div>
    </div>
  );
}

