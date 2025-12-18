import { Genre } from "../hooks/useGenres";

interface Props {
  genres: Genre[];
  value?: number;
  onChange: (id?: number) => void;
}

export function GenreFilter({ genres, value, onChange }: Props) {
  return (
    <div className="relative w-60 md:w-72">
      <select
        value={value ?? ""}
        onChange={(e) =>
          onChange(e.target.value ? Number(e.target.value) : undefined)
        }
        className="w-full border border-gray-300 rounded-lg p-2 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
      >
        <option value="">All Genres</option>
        {genres.map((g) => (
          <option key={g.mal_id} value={g.mal_id}>
            {g.name}
          </option>
        ))}
      </select>
      {/* Arrow indicator */}
      <span className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none text-gray-400">
        ▼
      </span>
    </div>
  );
}
