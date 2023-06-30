import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ITmdbMovieResult, makeImagePath } from "../apis/tmdb";
import useResize from "../hooks/useResize";
import MovieInfo from "./Thumbnail/ThumbnailInfo";
import Thumbnail from "./Thumbnail/Index";

interface SliderProps {
  movies: ITmdbMovieResult[];
  sliderTitle: string;
}

const gridGap = 5;
const Container = styled.section`
  position: relative;
  height: 300px;
  margin: 0px 20px;
`;
const SliderTitle = styled.h3`
  position: absolute;
  top: -120px;
  font-size: 28px;
  font-weight: 400;
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
// const Movie = styled(motion.div)<{ bgPhoto: string }>`
//   background-color: grey;
//   height: 200px;
//   position: relative;
//   color: white;
//   font-size: 18px;
//   background-image: linear-gradient(rgba(0, 0, 0, 0.125), rgba(0, 0, 0, 0.375)),
//     url(${(props) => props.bgPhoto});
//   background-size: cover;
//   background-position: center center;
//   &:first-child {
//     transform-origin: center left;
//   }
//   &:last-child {
//     transform-origin: center right;
//   }
//   cursor: pointer;
// `;

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
  z-index: 2;
`;

const NextButton = styled(NavButton)`
  right: 10px;
  z-index: 2;
`;

export default function Slider({ movies, sliderTitle }: SliderProps) {
  const navigate = useNavigate();
  const { width } = useResize();

  const [offset, setOffset] = useState(6);
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [sliderDirection, setSliderDirection] = useState<1 | -1>(1);

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
    setSliderDirection(1);

    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    toggleLeaving();
  };
  const decreaseIndex = () => {
    if (leaving) return;
    setSliderDirection(-1);

    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    toggleLeaving();
  };

  const toggleLeaving = () => {
    setLeaving((prev) => !prev);
  };

  const handleMovieClick = (movieId: number) => {
    navigate(`/movies/${movieId}`);
    console.log(movieId);
  };

  return (
    <Container>
      <SliderTitle>{sliderTitle}</SliderTitle>
      <PrevButton onClick={decreaseIndex}>&lt;</PrevButton>
      <NextButton onClick={increaseIndex}>&gt;</NextButton>

      <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
        <Row
          offset={offset}
          key={index}
          initial={{ x: sliderDirection * (window.outerWidth - gridGap) }}
          animate={{ x: 0 }}
          exit={{ x: sliderDirection * (-window.outerWidth + gridGap) }}
          transition={{ type: "tween" }}
        >
          {movies
            .slice(offset * index, offset * index + offset)
            .map((movie, i) => (
              <Thumbnail
                onMovieClick={() => {
                  handleMovieClick(movie.id);
                }}
                movie={movie}
              ></Thumbnail>
            ))}
        </Row>
      </AnimatePresence>
    </Container>
  );
}
