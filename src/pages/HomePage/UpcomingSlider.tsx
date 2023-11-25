import React from "react";

import { useQuery } from "@tanstack/react-query";
import LazyLoad from "react-lazyload";

import { IMovieReqsponse } from "../../apis/tmdb/types/IMovieReqsponse";
import { getUpcomingMovie } from "../../apis/tmdb/utils/tmdbApiHelper.js";
import Loader from "../../components/UI/Loader";
import Slider from "./MovieSlider";

export default function UpcomingSlider() {
  const { data: upcomingData } = useQuery<IMovieReqsponse>(
    ["movies", "upcoming"],
    getUpcomingMovie
  );
  return (
    <>
      {upcomingData && (
        <LazyLoad height={200} offset={100}>
          <Slider
            sliderTitle="상영 예정작"
            allMedia={upcomingData.results.slice(1, 19)}
          />
        </LazyLoad>
      )}
    </>
  );
}
