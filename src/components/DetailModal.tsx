import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";

import { Overlay } from "./UI/Overlay";
import Loader from "./UI/Loader";

import {
  ITmdbDetail,
  ITmdbMovieDetail,
  ITmdbShowDetail,
  fetchDetailMovie,
  fetchDetailShow,
  makeImagePath,
} from "../apis/tmdb";

interface IProps {
  mediaId: string;
  mediaType: "tv" | "movie";
}

const Container = styled(motion.div)`
  position: absolute;
  width: 500px;
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

export default function DetailModal({ mediaId, mediaType }: IProps) {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<ITmdbDetail>(
    ["movies", "detail"],
    mediaType === "movie"
      ? fetchDetailMovie.bind(null, +mediaId)
      : fetchDetailShow.bind(null, mediaId)
  );
  console.log(data);

  const hideOverlay = () => {
    mediaType === "movie" ? navigate("/") : navigate("/tv");
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
            <Container layoutId={mediaId}>
              <Image imgSrc={makeImagePath(data.backdrop_path, "w500")}></Image>
              <Title>
                {mediaType === "movie"
                  ? (data as ITmdbMovieDetail).title
                  : (data as ITmdbShowDetail).name}
              </Title>

              <Overview>{data.overview}</Overview>
            </Container>
          </AnimatePresence>
        </Overlay>
      ) : null}
    </>
  );
}
