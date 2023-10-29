import React, { useEffect, useState } from "react";

import styled from "styled-components";

import useResize from "../../hooks/useResize";

interface MovieRowProps {
  children: React.ReactNode;
}

const gridGap = 5;
const Container = styled.div<{ offset: number }>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.offset}, 1fr);
  grid-gap: ${gridGap}px;
  margin-bottom: 40px;
`;
export default function MovieRow({ children }: MovieRowProps) {
  const [offset, setOffset] = useState(6);
  const { width } = useResize();

  useEffect(() => {
    if (width > 1200) {
      setOffset(6);
    } else if (width > 800) {
      setOffset(3);
    }
  }, [width]);
  return <Container offset={offset}>{children}</Container>;
}
