import React from "react";

import { useQuery } from "@tanstack/react-query";

import { IMovieReqsponse } from "../../apis/tmdb/types/IMovieReqsponse";
import { getNowPlayingMovie } from "../../apis/tmdb/utils/tmdbApiHelper.js";
import Banner from "./Banner";
import Slider from "./MovieSlider";
import Error from "../../components/UI/Error";
import Loader from "../../components/UI/Loader";

export default function NowPlayingSlider() {
  const {
    isLoading: isLoadingNowPlaying,
    data: nowPlayingData,
    isError: isErrorNowPlaying,
  } = useQuery<IMovieReqsponse>(["movies", "nowPlaying"], getNowPlayingMovie);

  if (isLoadingNowPlaying) return <Loader />;
  if (isErrorNowPlaying) return <Error />;

  return (
    <>
      {nowPlayingData ? (
        <>
          <Banner bannerMovie={nowPlayingData.results[0]} />
          <Slider
            sliderTitle="현재 상영작"
            allMedia={nowPlayingData.results.slice(1, 19)}
          />
        </>
      ) : (
        <Error />
      )}
    </>
  );
}
