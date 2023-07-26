import React from "react";
import styled from "styled-components";
import Spinner from "../../assets/Spinner-1s-200px.gif";

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: white;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Loading() {
  return (
    <Container>
      <img src={Spinner} alt="로딩중" width="5%" />
    </Container>
  );
}
