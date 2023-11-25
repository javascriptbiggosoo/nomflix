import React from "react";

import { useQuery } from "@tanstack/react-query";
import LazyLoad from "react-lazyload";

import { IMovieReqsponse } from "../../apis/tmdb/types/IMovieReqsponse";
import { getPopularMovie } from "../../apis/tmdb/utils/tmdbApiHelper.js";
import Loader from "../../components/UI/Loader";
import Slider from "./MovieSlider";

export default function PopularSlider() {
  const { data: popularData } = useQuery<IMovieReqsponse>(
    ["movies", "popular"],
    getPopularMovie
  );
  return (
    <>
      {popularData && (
        <LazyLoad height={200} offset={100}>
          <Slider
            sliderTitle="최고 흥행작"
            allMedia={popularData.results.slice(1, 19)}
          />
        </LazyLoad>
      )}
      ;
    </>
  );
}
