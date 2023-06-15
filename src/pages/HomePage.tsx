import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchNowPlaying } from "../apis/tmdb";

export default function HomePage() {
  const { isLoading, data } = useQuery(
    ["movies", "nowPlaying"],
    fetchNowPlaying
  );

  console.log(data, isLoading);
  return <h1></h1>;
}
