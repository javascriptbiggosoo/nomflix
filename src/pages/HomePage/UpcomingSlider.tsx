import React from "react";

import { useQuery } from "@tanstack/react-query";

import { IMovieReqsponse } from "../../apis/tmdb/types/IMovieReqsponse";
import { getUpcomingMovie } from "../../apis/tmdb/utils/tmdbApiHelper.js";
import Slider from "./MovieSlider";

export default function UpcomingSlider() {
  const { data: upcomingData } = useQuery<IMovieReqsponse>(
    ["movies", "upcoming"],
    getUpcomingMovie
  );

  return (
    <>
      {upcomingData && (
        <Slider
          sliderTitle="상영 예정작"
          allMedia={upcomingData.results.slice(1, 19)}
        />
      )}
    </>
  );
}
