import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { tmdbRoot, fetchNowPlaying, fetchUpcoming } from "../apis/tmdb";
import styled from "styled-components";
import Loader from "../components/UI/Loader";
import Banner from "../components/Banner";
import Slider from "../components/Slider";

const Container = styled.div``;

export default function HomePage() {
  const {
    isLoading: isLoadingNowPlaying,
    data: nowPlayingData,
    isError: isErrorNowPlaying,
  } = useQuery<tmdbRoot>(["movies", "nowPlaying"], fetchNowPlaying);

  const {
    isLoading: isLoadingUpcoming,
    data: upcomingData,
    isError: isErrorUpcoming,
  } = useQuery<tmdbRoot>(["movies", "upcoming"], fetchUpcoming);

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
        </>
      )}
    </Container>
  );
}
