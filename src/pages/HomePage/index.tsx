// TODO: 컴포넌트 쪼개서 useQuery 한번에 안하기
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import LazyLoad from "react-lazyload";

import Slider from "./MovieSlider";
import Loader from "../../components/UI/Loader";
import Banner from "./Banner";
import Error from "../../components/UI/Error";

import {
  getNowPlayingMovie,
  getPopularMovie,
  getTopRatedMovie,
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
  const {
    isLoading: isLoadingTopRated,
    data: topRatedData,
    isError: isErrorTopRated,
  } = useQuery<IMovieReqsponse>(["movies", "topRated"], getTopRatedMovie);
  const {
    isLoading: isLoadingPopular,
    data: popularData,
    isError: isErrorPopular,
  } = useQuery<IMovieReqsponse>(["movies", "popular"], getPopularMovie);

  const isLoading =
    isLoadingNowPlaying ||
    isLoadingUpcoming ||
    isLoadingTopRated ||
    isLoadingPopular;
  const isError =
    isErrorNowPlaying || isErrorUpcoming || isErrorTopRated || isErrorPopular;

  if (isLoading) return <Loader />;

  if (isError) return <Error />;

  return (
    <Container>
      <>
        {nowPlayingData && (
          <>
            <Banner bannerMovie={nowPlayingData.results[0]} />
            <LazyLoad height={200} offset={100} placeholder={<Loader />}>
              <Slider
                sliderTitle="현재 상영작"
                allMedia={nowPlayingData.results.slice(1, 19)}
              />
            </LazyLoad>
          </>
        )}
        {popularData && (
          <LazyLoad height={200} offset={100} placeholder={<Loader />}>
            <Slider
              sliderTitle="흥행작"
              allMedia={popularData.results.slice(1, 19)}
            />
          </LazyLoad>
        )}
        {upcomingData && (
          <LazyLoad height={200} offset={100} placeholder={<Loader />}>
            <Slider
              sliderTitle="상영 예정작"
              allMedia={upcomingData.results.slice(1, 19)}
            />
          </LazyLoad>
        )}
        {topRatedData && (
          <LazyLoad height={200} offset={100} placeholder={<Loader />}>
            <Slider
              sliderTitle="불후의 명작"
              allMedia={topRatedData.results.slice(1, 19)}
            />
          </LazyLoad>
        )}
      </>
    </Container>
  );
}

const Container = styled.main`
  /* position: relative; */
`;
