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

const nowPlayingOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjA1Y2ExNTE4Y2RiYjhiNGEwMzFmNmExYjg3MzNiMCIsInN1YiI6IjY0OGE5OGUxMDc2Y2U4MDEwNjBmZTExMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJB_l-AUpcqKXCBpNxBP5xt6CT-EVYEt8mwV-nu7kjQ",
  },
};

export async function fetchNowPlaying() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1&region=kr",
    nowPlayingOptions
  );
  return await response.json();
}

const upcomingOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjA1Y2ExNTE4Y2RiYjhiNGEwMzFmNmExYjg3MzNiMCIsInN1YiI6IjY0OGE5OGUxMDc2Y2U4MDEwNjBmZTExMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJB_l-AUpcqKXCBpNxBP5xt6CT-EVYEt8mwV-nu7kjQ",
  },
};

export async function fetchUpcoming() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1",
    upcomingOptions
  );
  return await response.json();
}
