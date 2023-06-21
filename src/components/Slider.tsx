import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { Result, makeImagePath } from "../apis/tmdb";

interface SliderProps {
  movies: Result[];
}

const gridGap = 5;
const Container = styled.div`
  position: relative;
`;
const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  top: -80px;

  grid-template-columns: repeat(6, 1fr);
  grid-gap: ${gridGap}px;
  margin-bottom: 5px;
`;
const Movie = styled(motion.div)<{ bgPhoto: string }>`
  background-color: grey;
  height: 200px;
  color: white;
  font-size: 18px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
`;

const offset = 6;
export default function Slider({ movies }: SliderProps) {
  const maxIndex = Math.ceil(movies.length / offset) - 1;

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const increaseIndex = () => {
    if (leaving) return;
    setIndex((prev) => (prev === maxIndex ? prev : prev + 1));
    toggleLeaving();
  };
  const decreaseIndex = () => {
    if (leaving) return;
    setIndex((prev) => (prev === 0 ? prev : prev - 1));
    toggleLeaving();
  };

  const toggleLeaving = () => {
    setLeaving((prev) => !prev);
  };

  return (
    <Container>
      <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
        <Row
          key={index}
          initial={{ x: -window.outerWidth - gridGap }}
          animate={{ x: 0 }}
          exit={{ x: window.outerWidth + gridGap }}
          transition={{ type: "tween" }}
        >
          {movies
            .slice(offset * index, offset * index + offset)
            .map((movie, i) => (
              <Movie
                key={movie.id}
                bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
              >
                {movie.title}
              </Movie>
            ))}
        </Row>
      </AnimatePresence>
    </Container>
  );
}
