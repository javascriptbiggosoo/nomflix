import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white.lighter};
`;

export default function Error() {
  return <Container>An error has occurred...</Container>;
}
