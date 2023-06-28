import { useSearchParams } from "react-router-dom";
import {
  ITmdbMovieResult,
  ITmdbResult,
  ITmdbShowResult,
  fetchMultiSearch,
  makeImagePath,
} from "../apis/tmdb";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/UI/Loader";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const { data, isLoading, isError } = useQuery(
    ["search", keyword],
    fetchMultiSearch.bind(null, keyword as string)
  );

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <div>Error occurred</div>;
  }

  const movies = data.results.filter(
    (result: ITmdbResult) => result.media_type === "movie"
  );
  const tvShows = data.results.filter(
    (result: ITmdbResult) => result.media_type === "tv"
  );

  return (
    <div>
      <h1>Movies</h1>
      {movies.map((movie: ITmdbMovieResult) => (
        <div
          key={movie.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "20px",
          }}
        >
          <img
            src={makeImagePath(movie.poster_path, "w200")}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <p>Popularity: {movie.popularity}</p>
          <p>Vote Average: {movie.vote_average}</p>
        </div>
      ))}

      <h1>TV Shows</h1>
      {tvShows.map((show: ITmdbShowResult) => (
        <div
          key={show.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "20px",
          }}
        >
          <img src={makeImagePath(show.poster_path, "w200")} alt={show.name} />
          <h2>{show.name}</h2>
          <p>{show.first_air_date}</p>
          <p>Popularity: {show.popularity}</p>
          <p>Vote Average: {show.vote_average}</p>
        </div>
      ))}
    </div>
  );
}
