const BASE_URL = "https://api.themoviedb.org/3";
const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjA1Y2ExNTE4Y2RiYjhiNGEwMzFmNmExYjg3MzNiMCIsInN1YiI6IjY0OGE5OGUxMDc2Y2U4MDEwNjBmZTExMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJB_l-AUpcqKXCBpNxBP5xt6CT-EVYEt8mwV-nu7kjQ";

export interface ITmdbMovie {
  dates: { maximum: string; minimum: string };
  page: number;
  results: ITmdbMovieResult[];
  total_pages: number;
  total_results: number;
}

export interface ITmdbMovieResult {
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
  media_type: "movie";
}

export interface ITmdbShow {
  page: number;
  results: ITmdbShowResult[];
  total_pages: number;
  total_results: number;
}

export interface ITmdbShowResult {
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

export type ITmdbResult = ITmdbMovieResult | ITmdbShowResult;

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

export function fetchDetailMovie(id: number | string) {
  return fetchFromApi(`movie/${id}?language=ko-KR`);
}

export function fetchDetailShow(id: number | string) {
  return fetchFromApi(`tv/${id}?language=ko-KR`);
}
export function fetchMultiSearch(query: string) {
  return fetchFromApi(
    `search/multi?language=ko-KR&page=1&region=kr&query=${query}`
  );
}

export function fetchTrendingShow() {
  return fetchFromApi("trending/tv/day?language=ko-KR");
}

export interface ITmdbMovieDetail {
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: any;
  backdrop_path: any;
}

export interface ITmdbShowDetail {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  name: string;
  next_episode_to_air: any;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  seasons: Season[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

export type ITmdbDetail = ITmdbMovieDetail | ITmdbShowDetail;

export interface IVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
export async function fetchMovieTrailer(id: number | string) {
  const json = await fetchFromApi(`movie/${id}/videos?language=ko-KR`);
  return json.results.filter((item: IVideo) => item.type === "Trailer")[0];
}
