import { createBrowserRouter } from "react-router-dom";
import { AnimeListPage, AnimeDetailPage } from "../features/anime";
import { FavoritesPage } from "../features/favorites/pages/FavoritesPage";
import { MainLayout } from "../shared/layout/MainLayout";

export const router = createBrowserRouter(
  [
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <AnimeListPage /> },
        { path: "/favorites", element: <FavoritesPage /> },
        { path: "/anime-detail", element: <AnimeDetailPage /> },
        // { path: "/anime-detail/:id", element: <AnimeDetailPage /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);
