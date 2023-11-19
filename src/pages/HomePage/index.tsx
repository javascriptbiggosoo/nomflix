import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

import Slider from "./MovieSlider";
import Loader from "../../components/UI/Loader";
import Banner from "./Banner";
import Error from "../../components/UI/Error";

import {
  getNowPlayingMovie,
  getUpcomingMovie,
} from "../../apis/tmdb/utils/tmdbApiHelper.js.js";
import { IMovieReqsponse } from "../../apis/tmdb/types/IMovieReqsponse";

export default function HomePage() {
  const {
    isLoading: isLoadingNowPlaying,
    data: nowPlayingData,
    isError: isErrorNowPlaying,
  } = useQuery<IMovieReqsponse>(["movies", "nowPlaying"], getNowPlayingMovie);

  const {
    isLoading: isLoadingUpcoming,
    data: upcomingData,
    isError: isErrorUpcoming,
  } = useQuery<IMovieReqsponse>(["movies", "upcoming"], getUpcomingMovie);

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
        </>
      )}
    </Container>
  );
}

const Container = styled.main`
  /* position: relative; */
`;
