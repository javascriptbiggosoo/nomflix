import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Result, makeImagePath } from "../apis/tmdb";
import useResize from "../hooks/useResize";

interface SliderProps {
  movies: Result[];
}

const gridGap = 5;
const Container = styled.div`
  position: relative;
  height: 300px;
`;
const Row = styled(motion.div)<{ offset: number }>`
  position: absolute;
  width: 100%;
  display: grid;
  top: -80px;

  grid-template-columns: repeat(${(props) => props.offset}, 1fr);
  grid-gap: ${gridGap}px;
  margin-bottom: 5px;
`;
const Movie = styled(motion.div)<{ bgPhoto: string }>`
  background-color: grey;
  height: 200px;
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
`;
const NavButton = styled.button`
  position: absolute;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`;

const PrevButton = styled(NavButton)`
  left: 10px;
`;

const NextButton = styled(NavButton)`
  right: 10px;
`;
const movieVariants = {
  normal: { scale: 1 },
  hover: {
    scale: 1.25,
    y: -20,
    transition: {
      delay: 0.375,
      type: "tween",
      duration: 0.25,
    },
  },
};

export default function Slider({ movies }: SliderProps) {
  const { width } = useResize();

  const [offset, setOffset] = useState(6);
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [오른쪽이면1, set오른쪽이면1] = useState(1);

  const maxIndex = Math.ceil(movies.length / offset) - 1;

  useEffect(() => {
    if (width > 1200) {
      setOffset(6);
    } else if (width > 800) {
      setOffset(3);
    }
  }, [width]);

  const increaseIndex = () => {
    if (leaving) return;
    set오른쪽이면1(1);

    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    toggleLeaving();
  };
  const decreaseIndex = () => {
    if (leaving) return;
    set오른쪽이면1(-1);

    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    toggleLeaving();
  };

  const toggleLeaving = () => {
    setLeaving((prev) => !prev);
  };

  return (
    <Container>
      <PrevButton onClick={decreaseIndex}>&lt;</PrevButton>
      <NextButton onClick={increaseIndex}>&gt;</NextButton>

      <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
        <Row
          offset={offset}
          key={index}
          initial={{ x: 오른쪽이면1 * (window.outerWidth - gridGap) }}
          animate={{ x: 0 }}
          exit={{ x: 오른쪽이면1 * (-window.outerWidth + gridGap) }}
          transition={{ type: "tween" }}
        >
          {movies
            .slice(offset * index, offset * index + offset)
            .map((movie, i) => (
              <Movie
                key={movie.id}
                variants={movieVariants}
                whileHover="hover"
                bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                transition={{ type: "tween" }}
              ></Movie>
            ))}
        </Row>
      </AnimatePresence>
    </Container>
  );
}
