import { useSearchParams } from "react-router-dom";
import {
  ITmdbMovieResult,
  fetchMultiSearch,
  makeImagePath,
} from "../apis/tmdb";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/UI/Loader";
import Error from "../components/UI/Error";
import styled from "styled-components";
import Thumbnail from "../components/Thumbnail/Index";
import MovieRow from "../components/MovieContainer";

const Container = styled.main`
  top: 70px;

  position: relative;
  margin: 0px 20px;
`;
const MainTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;
const SectionTitle = styled.h3`
  font-size: 28px;
  font-weight: 400;

  margin-bottom: 20px;
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
    (result: ITmdbMovieResult) =>
      result.media_type === "movie" && result.backdrop_path
  );

  return (
    <Container>
      <MainTitle>
        "<strong style={{ fontWeight: "bold" }}>{keyword}</strong>"의
        검색결과입니다.
      </MainTitle>

      <MovieRow>
        {movies.map((movie: ITmdbMovieResult) => (
          <Thumbnail
            key={movie.id}
            onMovieClick={() => {
              return;
            }}
            movieId={movie.id}
            movieTitle={movie.title}
            movieBackdropPath={makeImagePath(movie.backdrop_path, "w400")}
          ></Thumbnail>
        ))}
      </MovieRow>
    </Container>
  );
}
