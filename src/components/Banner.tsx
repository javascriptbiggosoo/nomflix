import React from "react";
import styled from "styled-components";
import { Result, makeImagePath } from "../apis/tmdb";

const Container = styled.div<{ bgPhoto: string }>`
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
interface Props {
  bannerMovie: Result;
}

export default function Banner({ bannerMovie }: Props) {
  return (
    <Container bgPhoto={bannerMovie.backdrop_path}>
      <Title>{bannerMovie.title}</Title>
      <OverView>{bannerMovie.overview}</OverView>
    </Container>
  );
}
