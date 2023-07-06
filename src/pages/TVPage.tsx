import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useMatch } from "react-router-dom";

import Slider from "../components/Slider";
import DetailModal from "../components/DetailModal";
import Loader from "../components/UI/Loader";
import Banner from "../components/Banner";
import Error from "../components/UI/Error";

import { ITmdbShow, fetchTrendingTV, fetchUpcomingMovie } from "../apis/tmdb";

const Container = styled.main``;

export default function TVPage() {
  const {
    isLoading: isLoadingTrending,
    data: trendingData,
    isError: isErrorTrending,
  } = useQuery<ITmdbShow>(["tv", "trending"], fetchTrendingTV);
  const movieDetailPage = useMatch("/tv/:showId");

  // const {
  //   isLoading: isLoadingUpcoming,
  //   data: upcomingData,
  //   isError: isErrorUpcoming,
  // } = useQuery<ITmdbMovie>(["movies", "upcoming"], fetchUpcomingMovie);

  // const isLoading = isLoadingNowPlaying || isLoadingUpcoming;
  // const isError = isErrorNowPlaying || isErrorUpcoming;

  if (isLoadingTrending) return <Loader />;

  if (isErrorTrending) return <Error />;

  return (
    <Container>
      {trendingData && (
        <>
          <Banner bannerMovie={trendingData.results[0]} />
          <Slider
            sliderTitle="화제의 프로그램"
            allMedia={trendingData.results.slice(1, 19)}
          />
          {/* <Slider
            sliderTitle="상영 예정작"
            movies={upcomingData.results.slice(1, 19)}
          /> */}

          {movieDetailPage?.params.showId && (
            <DetailModal
              mediaType="tv"
              mediaId={movieDetailPage.params.showId}
            ></DetailModal>
          )}
        </>
      )}
    </Container>
  );
}
