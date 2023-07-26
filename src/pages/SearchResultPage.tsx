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
import { useEffect, useState } from "react";
import useResize from "../hooks/useResize";
import Thumbnail from "../components/Thumbnail/Index";

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
const gridGap = 5;
const Row = styled.div<{ offset: number }>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.offset}, 1fr);
  grid-gap: ${gridGap}px;
  margin-bottom: 40px;
`;

export default function SearchPage() {
  const [offset, setOffset] = useState(6);
  const [searchParams] = useSearchParams();
  const { width } = useResize();

  useEffect(() => {
    if (width > 1200) {
      setOffset(6);
    } else if (width > 800) {
      setOffset(3);
    }
  }, [width]);

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

      <Row offset={offset}>
        {movies.map((movie: ITmdbMovieResult) => (
          <Thumbnail
            key={movie.id}
            onMovieClick={() => {
              return;
            }}
            mediaId={movie.id}
            mediaTitle={movie.title}
            mediaType={"title" in movie ? "movie" : "tv"}
            bgPhoto={makeImagePath(movie.backdrop_path, "w400")}
          ></Thumbnail>
        ))}
      </Row>

      <SectionTitle>TV Shows</SectionTitle>

      <Row offset={offset}>
        {tvShows.map((show: ITmdbShowResult, idx: number) => (
          <Thumbnail
            key={idx}
            onMovieClick={() => {
              return;
            }}
            mediaId={show.id}
            mediaTitle={show.name}
            mediaType={"tv"}
            bgPhoto={makeImagePath(show.backdrop_path, "w400")}
          ></Thumbnail>
        ))}
      </Row>
    </Container>
  );
}
