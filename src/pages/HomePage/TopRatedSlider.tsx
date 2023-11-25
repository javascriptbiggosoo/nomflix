import React from "react";

import { useQuery } from "@tanstack/react-query";
import LazyLoad from "react-lazyload";

import { IMovieReqsponse } from "../../apis/tmdb/types/IMovieReqsponse";
import { getTopRatedMovie } from "../../apis/tmdb/utils/tmdbApiHelper.js";
import Loader from "../../components/UI/Loader";
import Slider from "./MovieSlider";

export default function TopRatedSlider() {
  const { data: topRatedData } = useQuery<IMovieReqsponse>(
    ["movies", "topRated"],
    getTopRatedMovie
  );

  return (
    <>
      {topRatedData && (
        <LazyLoad height={200} offset={100}>
          <Slider
            sliderTitle="불후의 명작"
            allMedia={topRatedData.results.slice(1, 19)}
          />
        </LazyLoad>
      )}
    </>
  );
}
