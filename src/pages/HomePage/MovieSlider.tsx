import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

import useResize from "../../hooks/useResize";
import Thumbnail from "../../components/Thumbnail";
import { makeImagePath } from "../../apis/tmdb/utils/makeImagePath";
import { IMovieResult } from "../../apis/tmdb/types/IMovieReqsponse";
import { randomUUID } from "crypto";

interface SliderProps {
  allMedia: IMovieResult[];
  sliderTitle: string;
}

export default function Slider({
  allMedia: allMedia,
  sliderTitle,
}: SliderProps) {
  const { width } = useResize();

  const [offset, setOffset] = useState(6);
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [sliderDirection, setSliderDirection] = useState<1 | -1>(1);

  const maxIndex = Math.ceil(allMedia.length / offset) - 1;

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
          {allMedia
            .slice(offset * index, offset * index + offset)
            .map((media) => (
              <Thumbnail
                movieId={media.id}
                movieTitle={media.title}
                key={media.id}
                movieBackdropPath={makeImagePath(media.backdrop_path, "w400")}
              />
            ))}
        </Row>
      </AnimatePresence>
    </Container>
  );
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
