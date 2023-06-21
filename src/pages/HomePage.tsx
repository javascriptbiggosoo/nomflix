import React from "react";
import { useQuery } from "@tanstack/react-query";
import { NowPlayingRoot, fetchNowPlaying } from "../apis/tmdb";
import styled from "styled-components";
import Loader from "../components/UI/Loader";
import Banner from "../components/Banner";
import Slider from "../components/Slider";

const Container = styled.div``;

export default function HomePage() {
  const { isLoading, data } = useQuery<NowPlayingRoot>(
    ["movies", "nowPlaying"],
    fetchNowPlaying
  );

  console.log(data, isLoading);
  return (
    <Container>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        data && (
          <>
            <Banner bannerMovie={data.results[0]}></Banner>
            <Slider movies={data.results.slice(1, 19)}></Slider>
          </>
        )
      )}
    </Container>
  );
}
