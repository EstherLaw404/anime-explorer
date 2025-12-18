import { useLocation } from "react-router-dom";
import { Anime } from "../types/anime";

export function AnimeDetailPage() {
  const location = useLocation();
  const { anime } = location.state as { anime: Anime };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      {/* Top section: image + main info */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Anime image */}
        {anime.images?.jpg?.image_url && (
          <img
            src={anime.images.jpg.image_url}
            alt={anime.title}
            className="w-full md:w-64 rounded-lg shadow-md object-cover"
          />
        )}

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{anime.title}</h1>
          {anime.score && (
            <p className="text-yellow-600 font-semibold mb-2">
              ⭐ Score: {anime.score}
            </p>
          )}
          {anime.episodes && (
            <p className="text-gray-600 mb-2">
              🎬 Episodes: {anime.episodes}
            </p>
          )}
          {anime.type && (
            <p className="text-gray-600 mb-2">
              📺 Type: {anime.type}
            </p>
          )}
          {anime.duration && (
            <p className="text-gray-600 mb-2">
              ⏱ Duration: {anime.duration}
            </p>
          )}
          <p className="text-gray-700 mt-4">{anime.synopsis}</p>
        
          {(
            <div className="mt-4 flex flex-wrap gap-2">
              {anime.genres?.map((genre) => (
                <span
                  key={genre.mal_id}
                  className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
