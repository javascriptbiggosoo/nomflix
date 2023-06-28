import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Overlay } from "./UI/Overlay";
import { useNavigate } from "react-router-dom";
import { fetchDetailMovie, makeImagePath } from "../apis/tmdb";
import { useQuery } from "@tanstack/react-query";
import Loader from "./UI/Loader";

interface IProps {
  movieId: string;
}

export interface Root {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
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

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

const Container = styled(motion.div)`
  position: absolute;
  width: 500px;
  /* height: 80vh; */
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.black.lighter};
  border-radius: 15px;
  overflow: hidden;
  color: ${(props) => props.theme.white.lighter};
`;

const Image = styled(motion.div)<{ imgSrc: string }>`
  width: 100%;
  height: 281.25px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.125), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
const Title = styled.h2`
  position: relative;

  padding: 20px;
  font-size: 31px;
  top: -90px;
`;
const Overview = styled.div`
  position: relative;
  padding: 20px;
  top: -45px;
`;

export default function MovieModal({ movieId }: IProps) {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery<Root>(
    ["movies", "detail"],
    fetchDetailMovie.bind(null, +movieId)
  );
  console.log(data);

  const hideOverlay = () => {
    navigate("/");
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : data ? (
        <Overlay hideOverlay={hideOverlay}>
          <AnimatePresence>
            <Container layoutId={movieId}>
              <Image imgSrc={makeImagePath(data.backdrop_path, "w500")}></Image>
              <Title>{data.title}</Title>
              <Overview>{data.overview}</Overview>
            </Container>
          </AnimatePresence>
        </Overlay>
      ) : null}
    </>
  );
}
