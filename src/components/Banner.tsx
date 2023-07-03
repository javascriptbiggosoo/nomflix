import React from "react";
import styled from "styled-components";
import { ITmdbMovieResult, ITmdbShowResult, makeImagePath } from "../apis/tmdb";

interface Props {
  bannerMovie: ITmdbMovieResult | ITmdbShowResult;
}

const Container = styled.section<{ bgPhoto: string }>`
  height: 80vh;
  display: flex;

  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.625)),
    url(${(props) => makeImagePath(props.bgPhoto)});
  background-size: cover;
  background-position: center top;
`;
const Title = styled.h2`
  font-size: 60px;
  margin-bottom: 10px;
`;
const OverView = styled.p`
  font-size: 30px;
`;

export default function Banner({ bannerMovie }: Props) {
  return (
    <Container bgPhoto={bannerMovie.backdrop_path}>
      <Title>
        {"name" in bannerMovie ? bannerMovie.name : bannerMovie.title}
      </Title>
      <OverView>{bannerMovie.overview}</OverView>
    </Container>
  );
}
