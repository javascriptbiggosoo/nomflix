import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  tmdbRoot,
  fetchNowPlayingMovie,
  fetchUpcomingMovie,
} from "../apis/tmdb";
import styled from "styled-components";
import Loader from "../components/UI/Loader";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import { useMatch } from "react-router-dom";
import MovieModal from "../components/MovieModal";

const Container = styled.div``;

export default function HomePage() {
  const {
    isLoading: isLoadingNowPlaying,
    data: nowPlayingData,
    isError: isErrorNowPlaying,
  } = useQuery<tmdbRoot>(["movies", "nowPlaying"], fetchNowPlayingMovie);
  const movieDetailPage = useMatch("/movies/:movieId");
  console.log(movieDetailPage);

  const {
    isLoading: isLoadingUpcoming,
    data: upcomingData,
    isError: isErrorUpcoming,
  } = useQuery<tmdbRoot>(["movies", "upcoming"], fetchUpcomingMovie);

  const isLoading = isLoadingNowPlaying || isLoadingUpcoming;
  const isError = isErrorNowPlaying || isErrorUpcoming;

  if (isLoading) return <Loader />;

  if (isError) return <div>There was an error loading the data.</div>;

  return (
    <Container>
      {nowPlayingData && upcomingData && (
        <>
          <Banner bannerMovie={nowPlayingData.results[0]} />
          <Slider movies={nowPlayingData.results.slice(1, 19)} />
          <Slider movies={upcomingData.results.slice(1, 19)} />

          {movieDetailPage?.params.movieId && (
            <MovieModal movieId={movieDetailPage.params.movieId}></MovieModal>
          )}
        </>
      )}
    </Container>
  );
}
