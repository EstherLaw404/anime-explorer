# Anime Explorer

## Project Structure
This project uses a feature-based structure, where each feature (e.g., anime, favorites) contains its own components, hooks, pages, and types. This keeps related code together, making the project scalable, maintainable
```
anime-explorer/
├─ public/
├─ src/
│  ├─ App.tsx
│  ├─ index.tsx
│  ├─ react-app-env.d.ts
│  ├─ setupTests.ts
│  ├─ shared/
│  │  ├─ layout/
│  │  │  ├─ MainLayout.tsx
│  │  │  ├─ Sidebar.tsx
│  │  │  └─ Navbar.tsx
│  │  └─ components/
│  │     └─ (any shared components)
│  │
│  ├─ features/
│     ├─ anime/
│     │  ├─ api/
│     │  │  └─ anime.api.ts
│     │  ├─ components/
│     │  │  ├─ AnimeCard.tsx
│     │  │  ├─ AnimeGrid.tsx
│     │  │  └─ (other anime-specific components)
│     │  ├─ hooks/
│     │  │  ├─ useAnime.ts
│     │  │  └─ useGenres.ts
│     │  ├─ pages/
│     │  │  ├─ AnimeListPage.tsx
│     │  │  └─ AnimeDetailPage.tsx
│     │  ├─ types/
│     │  │  └─ anime.ts
│     │
│     ├─ favorites/
│     │  ├─ components/
│     │  │  └─ FavoriteButton.tsx
│     │  ├─ pages/
│     │  │  └─ FavoritesPage.tsx
│     │  ├─ hooks/
│     │  │  └─ useFavorites.ts
│     │  └─ types/
│     │     └─ favoriteButton.ts
│     │
│     └─ (other features if any)
│
├─ package.json
├─ tsconfig.json
├─ tailwind.config.js
└─ (other config files)

```

## Getting Started 🚀

### Prerequisites
- Node.js v20+

### Quick Start
```bash
npm install
npm run dev
```