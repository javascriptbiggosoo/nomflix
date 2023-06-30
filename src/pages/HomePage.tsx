import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useMatch } from "react-router-dom";

import Slider from "../components/Slider";
import MovieModal from "../components/MovieModal";
import Loader from "../components/UI/Loader";
import Banner from "../components/Banner";
import Error from "../components/UI/Error";

import {
  ITmdbMovie,
  fetchNowPlayingMovie,
  fetchUpcomingMovie,
} from "../apis/tmdb";

const Container = styled.main``;

export default function HomePage() {
  const {
    isLoading: isLoadingNowPlaying,
    data: nowPlayingData,
    isError: isErrorNowPlaying,
  } = useQuery<ITmdbMovie>(["movies", "nowPlaying"], fetchNowPlayingMovie);
  const movieDetailPage = useMatch("/movies/:movieId");
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
            movies={nowPlayingData.results.slice(1, 19)}
          />
          <Slider
            sliderTitle="상영 예정작"
            movies={upcomingData.results.slice(1, 19)}
          />

          {movieDetailPage?.params.movieId && (
            <MovieModal movieId={movieDetailPage.params.movieId}></MovieModal>
          )}
        </>
      )}
    </Container>
  );
}
