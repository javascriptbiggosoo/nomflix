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
  // 이거 한국지역 api 잠시 고장남;
  // movie/now_playing?language=ko-KR&page=1&region=kr
  return fetchFromApi("movie/now_playing?language=ko-KR&page=1");
}

export function fetchUpcomingMovie() {
  return fetchFromApi("movie/upcoming?language=ko-KR&page=1&region=kr");
}

export function fetchDetailMovie(id: number | string) {
  return fetchFromApi(`movie/${id}?language=ko-KR`);
}

export function fetchMultiSearch(query: string) {
  return fetchFromApi(
    `search/multi?language=ko-KR&page=1&region=kr&query=${query}`
  );
}

interface ProductionCompanies {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
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
  production_companies: ProductionCompanies;
  release_date: string;
  revenue: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: any;
  backdrop_path: any;
}

interface Genre {
  id: number;
  name: string;
}

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
  const json = await fetchFromApi(`movie/${id}/videos?language=en-US`);
  return json.results.filter((item: IVideo) => item.type === "Trailer")[0];
}
