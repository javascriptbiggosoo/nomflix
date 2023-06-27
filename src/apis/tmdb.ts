const BASE_URL = "https://api.themoviedb.org/3";
const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjA1Y2ExNTE4Y2RiYjhiNGEwMzFmNmExYjg3MzNiMCIsInN1YiI6IjY0OGE5OGUxMDc2Y2U4MDEwNjBmZTExMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJB_l-AUpcqKXCBpNxBP5xt6CT-EVYEt8mwV-nu7kjQ";

export interface tmdbRoot {
  dates: Dates;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export function makeImagePath(id: string, format?: string) {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: AUTH_TOKEN,
  },
};

async function fetchFromApi(endpoint: string) {
  const response = await fetch(`${BASE_URL}/${endpoint}`, options);
  return await response.json();
}

export function fetchNowPlayingMovie() {
  return fetchFromApi("movie/now_playing?language=ko-KR&page=1&region=kr");
}

export function fetchUpcomingMovie() {
  return fetchFromApi("movie/upcoming?language=ko-KR&page=1&region=kr");
}

export function fetchDetailMovie(id: number) {
  return fetchFromApi(`movie/${id}?language=ko-KR`);
}
