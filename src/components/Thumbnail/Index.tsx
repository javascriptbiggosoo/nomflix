import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import ThumbnailInfo from "./ThumbnailInfo";

interface IProps {
  onMovieClick: (id: number) => void;
  mediaId: number;
  mediaTitle: string;
  bgPhoto: string;
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

const containerVariants = {
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
export default function Thumbnail({
  onMovieClick,
  mediaId,
  mediaTitle,
  bgPhoto,
}: IProps) {
  return (
    <AnimatePresence>
      <Container
        layoutId={''+mediaId}
        key={mediaId}
        variants={containerVariants}
        onClick={() => {
          onMovieClick(mediaId);
        }}
        whileHover="hover"
        bgPhoto={bgPhoto}
        transition={{ type: "tween" }}
      >
        <ThumbnailInfo title={mediaTitle}></ThumbnailInfo>
      </Container>
    </AnimatePresence>
  );
}
