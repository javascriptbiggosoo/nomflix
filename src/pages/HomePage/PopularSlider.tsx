import React from "react";

import { useQuery } from "@tanstack/react-query";

import { IMovieReqsponse } from "../../apis/tmdb/types/IMovieReqsponse";
import { getPopularMovie } from "../../apis/tmdb/utils/tmdbApiHelper.js";
import Slider from "./MovieSlider";

export default function PopularSlider() {
  const { data: popularData } = useQuery<IMovieReqsponse>(
    ["movies", "popular"],
    getPopularMovie
  );

  return (
    <>
      {popularData && (
        <Slider
          sliderTitle="최고 흥행작"
          allMedia={popularData.results.slice(1, 19)}
        />
      )}
      ;
    </>
  );
}
