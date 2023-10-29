import { useEffect } from "react";

import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import YouTube from "react-youtube";

import { Overlay } from "../UI/Overlay";

import {
  ITmdbMovieDetail,
  IVideo,
  fetchDetailMovie,
  fetchMovieTrailer,
} from "../../apis/tmdb";

interface IProps {
  movieId: string;
  onClickOverlay: (ev: React.MouseEvent<HTMLDivElement>) => void;
}

const Container = styled(motion.div)`
  position: absolute;
  width: 640px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.black.lighter};
  border-radius: 15px;
  overflow: hidden;
  color: ${(props) => props.theme.white.lighter};
`;

// const Image = styled(motion.div)<{ imgSrc: string }>`
//   width: 100%;
//   height: 360px;
//   background-image: linear-gradient(rgba(0, 0, 0, 0.125), rgba(0, 0, 0, 0.5)),
//     url(${(props) => props.imgSrc});
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center center;
// `;

const Title = styled.h2`
  position: relative;

  padding: 10px 20px;
  font-size: 31px;
  /* top: -90px; */
`;
const Overview = styled.div`
  position: relative;
  padding: 10px;
  /* top: -45px; */
`;

export default function TrailerModal({
  movieId: mediaId,
  onClickOverlay,
}: IProps) {
  const { data } = useQuery<ITmdbMovieDetail>(
    ["movies", "detail"],
    fetchDetailMovie.bind(null, +mediaId)
  );
  console.log(data);
  const { data: trailerData } = useQuery<IVideo>(
    ["media", "trailer"],
    fetchMovieTrailer.bind(null, mediaId)
  );

  useEffect(() => {
    // 스크롤 막기
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      {data ? (
        <Overlay onClickOverlay={onClickOverlay}>
          <AnimatePresence>
            <Container layoutId={mediaId}>
              <YouTube
                videoId={trailerData?.key}
                opts={{
                  width: "640",
                  height: "390",
                  playerVars: {
                    autoplay: 1,
                    rel: 0,
                    modestbranding: 1,
                  },
                }}
              ></YouTube>
              <Title>{data.title}</Title>

              <Overview>{data.overview}</Overview>
            </Container>
          </AnimatePresence>
        </Overlay>
      ) : null}
    </>
  );
}
