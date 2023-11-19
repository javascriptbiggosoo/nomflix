import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getSearchedMovie } from "../../apis/tmdb/utils/tmdbApiHelper.js.js";
import Loader from "../../components/UI/Loader";
import Error from "../../components/UI/Error";
import Thumbnail from "../../components/Thumbnail";
import MovieRow from "./MovieContainer";
import { IMovieResult } from "../../apis/tmdb/types/IMovieReqsponse";
import { makeImagePath } from "../../apis/tmdb/utils/makeImagePath";

const Container = styled.main`
  top: 70px;

  position: relative;
  margin: 0px 20px;
`;
const MainTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

export default function SearchPage() {
  const [searchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");
  const { data, isLoading, isError } = useQuery(
    ["search", keyword],
    getSearchedMovie.bind(null, keyword as string)
  );

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <Error></Error>;
  }

  const movies = data.results.filter(
    (result: IMovieResult) =>
      result.media_type === "movie" && result.backdrop_path
  );

  return (
    <Container>
      <MainTitle>
        "<strong style={{ fontWeight: "bold" }}>{keyword}</strong>"의
        검색결과입니다.
      </MainTitle>

      <MovieRow>
        {movies.map((movie: IMovieResult) => (
          <Thumbnail
            key={movie.id}
            movieId={movie.id}
            movieTitle={movie.title}
            movieBackdropPath={makeImagePath(movie.backdrop_path, "w400")}
          ></Thumbnail>
        ))}
      </MovieRow>
    </Container>
  );
}
