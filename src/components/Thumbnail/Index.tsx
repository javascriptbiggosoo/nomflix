import React from "react";
import { ITmdbMovieResult, makeImagePath } from "../../apis/tmdb";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import MovieInfo from "./ThumbnailInfo";

interface IProps {
  movie: ITmdbMovieResult;
  onMovieClick: (id: number) => void;
}

const Container = styled(motion.div)<{ bgPhoto: string }>`
  background-color: grey;
  height: 200px;
  position: relative;
  color: white;
  font-size: 18px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.125), rgba(0, 0, 0, 0.375)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
  cursor: pointer;
`;

const movieVariants = {
  normal: { scale: 1 },
  hover: {
    scale: 1.25,
    y: -20,
    zIndex: 1,
    transition: {
      delay: 0.375,
      type: "tween",
      duration: 0.25,
    },
  },
};

export default function Thumbnail({ movie, onMovieClick }: IProps) {
  return (
    <AnimatePresence>
      <Container
        layoutId={"" + movie.id}
        key={movie.id}
        variants={movieVariants}
        onClick={() => {
          onMovieClick(movie.id);
        }}
        whileHover="hover"
        bgPhoto={makeImagePath(movie.backdrop_path, "w400")}
        transition={{ type: "tween" }}
      >
        <MovieInfo movieTitle={movie.title}></MovieInfo>
      </Container>
    </AnimatePresence>
  );
}
