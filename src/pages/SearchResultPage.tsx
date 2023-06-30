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
import Error from "../components/UI/Error";
import styled from "styled-components";

const Container = styled.main`
  position: relative;
  top: 70px;
  margin: 0 auto;
  margin: auto;
  margin: 0px 20px;
  z-index: -1;
`;
const MainTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;
const SectionTitle = styled.h3`
  font-size: 28px;
  font-weight: 400;
`;

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
    return <Error></Error>;
  }

  const movies = data.results.filter(
    (result: ITmdbResult) =>
      result.media_type === "movie" && result.backdrop_path
  );

  const tvShows = data.results.filter(
    (result: ITmdbResult) => result.media_type === "tv" && result.backdrop_path
  );

  return (
    <Container>
      <MainTitle>
        "<strong style={{ fontWeight: "bold" }}>{keyword}</strong>"의
        검색결과입니다.
      </MainTitle>
      <SectionTitle>Movies</SectionTitle>
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
            src={makeImagePath(movie.backdrop_path, "w500")}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <p>Popularity: {movie.popularity}</p>
          <p>Vote Average: {movie.vote_average}</p>
        </div>
      ))}

      <SectionTitle>TV Shows</SectionTitle>
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
          <img
            src={makeImagePath(show.backdrop_path, "w500")}
            alt={show.name}
          />
          <h2>{show.name}</h2>
          <p>{show.first_air_date}</p>
          <p>Popularity: {show.popularity}</p>
          <p>Vote Average: {show.vote_average}</p>
        </div>
      ))}
    </Container>
  );
}
