import { useParams } from "react-router-dom";

export function AnimeDetailPage() {
  const { id } = useParams();
  return <div>Anime Detail: {id}</div>;
}
