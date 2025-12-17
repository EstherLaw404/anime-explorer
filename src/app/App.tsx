import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimeListPage, AnimeDetailPage } from "../features/anime";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AnimeListPage />} />
      <Route path="/:id" element={<AnimeDetailPage />} />
    </Routes>
  );
}