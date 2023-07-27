import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useMatch } from "react-router-dom";

import Slider from "../components/MovieSlider";
import TrailerModal from "../components/TrailerModal";
import Loader from "../components/UI/Loader";
import Banner from "../components/Banner";
import Error from "../components/UI/Error";

import {
  ITmdbMovie,
  fetchNowPlayingMovie,
  fetchUpcomingMovie,
} from "../apis/tmdb";

const Container = styled.main`
  /* position: relative; */
`;

export default function HomePage() {
  const {
    isLoading: isLoadingNowPlaying,
    data: nowPlayingData,
    isError: isErrorNowPlaying,
  } = useQuery<ITmdbMovie>(["movies", "nowPlaying"], fetchNowPlayingMovie);
  const isMovieDetailPage = useMatch("/movies/:movieId");
  // console.log(movieDetailPage);

  const {
    isLoading: isLoadingUpcoming,
    data: upcomingData,
    isError: isErrorUpcoming,
  } = useQuery<ITmdbMovie>(["movies", "upcoming"], fetchUpcomingMovie);

  const isLoading = isLoadingNowPlaying || isLoadingUpcoming;
  const isError = isErrorNowPlaying || isErrorUpcoming;

  if (isLoading) return <Loader />;

  if (isError) return <Error />;

  return (
    <Container>
      {nowPlayingData && upcomingData && (
        <>
          <Banner bannerMovie={nowPlayingData.results[0]} />
          <Slider
            sliderTitle="현재 상영작"
            allMedia={nowPlayingData.results.slice(1, 19)}
          />
          <Slider
            sliderTitle="상영 예정작"
            allMedia={upcomingData.results.slice(1, 19)}
          />

          {isMovieDetailPage?.params.movieId && (
            <TrailerModal
              movieId={isMovieDetailPage.params.movieId}
            ></TrailerModal>
          )}
        </>
      )}
    </Container>
  );
}
