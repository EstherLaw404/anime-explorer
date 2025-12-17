import { createBrowserRouter } from "react-router-dom";
import { AnimeListPage, AnimeDetailPage } from "../features/anime";

export const router = createBrowserRouter([
  { path: "/", element: <AnimeListPage /> },
  { path: "/anime-detail", element: <AnimeDetailPage /> },
]);

