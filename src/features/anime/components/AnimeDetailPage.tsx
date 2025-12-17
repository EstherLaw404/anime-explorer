// src/features/anime/components/AnimeDetailPage.tsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Anime } from "../types/anime";

export function AnimeDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const anime: Anime | undefined = location.state?.anime;

  if (!anime) return <div className="p-4">No anime selected.</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <button
        className="mb-4 text-blue-500 hover:underline"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url}
          alt={anime.title}
          className="w-full md:w-64 rounded shadow-lg"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{anime.title}</h1>
          {anime.title_english && anime.title_english !== anime.title && (
            <h2 className="text-xl text-gray-500">{anime.title_english}</h2>
          )}
          {anime.score && <p className="mt-2 text-yellow-500 font-semibold">Score: {anime.score}</p>}
          <p className="mt-2 text-gray-600">{anime.type} • {anime.episodes} episodes</p>
          <p className="mt-1 text-gray-500">{anime.status}</p>
        </div>
      </div>

      {anime.synopsis && (
        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-2">Synopsis</h3>
          <p className="text-gray-700 whitespace-pre-line">{anime.synopsis}</p>
        </div>
      )}
    </div>
  );
}
