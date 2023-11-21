const BASE_URL = "https://api.themoviedb.org/3";
const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjA1Y2ExNTE4Y2RiYjhiNGEwMzFmNmExYjg3MzNiMCIsInN1YiI6IjY0OGE5OGUxMDc2Y2U4MDEwNjBmZTExMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJB_l-AUpcqKXCBpNxBP5xt6CT-EVYEt8mwV-nu7kjQ";

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

export function getNowPlayingMovie() {
  // 이거 한국지역 api 잠시 고장남;
  // movie/now_playing?language=ko-KR&page=1&region=kr
  return fetchFromApi("movie/now_playing?language=ko-KR&page=1");
}
export function getUpcomingMovie() {
  return fetchFromApi("movie/upcoming?language=ko-KR&page=1&region=kr");
}
export function getTopRatedMovie() {
  return fetchFromApi("movie/top_rated?language=ko-KR&page=1&region=kr");
}
export function getPopularMovie() {
  return fetchFromApi("movie/popular?language=ko-KR&page=1&region=ko");
}

export function getSearchedMovie(query: string) {
  return fetchFromApi(
    `search/multi?language=ko-KR&page=1&region=kr&query=${query}`
  );
}

export function getDetailMovie(id: number | string) {
  return fetchFromApi(`keyword/${id}?language=ko-KR`);
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

export async function getMovieTrailer(id: number | string) {
  const json = await fetchFromApi(`movie/${id}/videos?language=en-US`);
  return json.results.filter((item: IVideo) => item.type === "Trailer")[0];
}
