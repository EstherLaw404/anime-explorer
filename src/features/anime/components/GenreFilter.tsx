import { Genre } from "../hooks/useGenres";

interface Props {
  genres: Genre[];
  value?: number;
  onChange: (id?: number) => void;
}

export function GenreFilter({ genres, value, onChange }: Props) {
  return (
    <select
      value={value ?? ""}
      onChange={(e) =>
        onChange(e.target.value ? Number(e.target.value) : undefined)
      }
      className="border p-2 rounded w-60"
    >
      <option value="">All Genres</option>
      {genres.map((g) => (
        <option key={g.mal_id} value={g.mal_id}>
          {g.name}
        </option>
      ))}
    </select>
  );
}
