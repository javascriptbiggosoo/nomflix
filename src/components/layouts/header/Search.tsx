import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  color: white;
  svg {
    height: 25px;
  }
  position: relative;
`;

const Input = styled(motion.input)`
  width: 275px;
  height: 35px;
  transform-origin: right center;
  position: absolute;
  right: 0px;
  padding: 5px 10px;
  padding-left: 40px;
  z-index: -1;
  color: white;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white.lighter};
`;

export default function Search() {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    if (searchOpen) {
    } else {
    }
    setSearchOpen((prev) => !prev);
  };

  return (
    <Container>
      <motion.svg
        animate={{ x: searchOpen ? -245 : 0 }}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        onClick={toggleSearch}
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        ></path>
      </motion.svg>
      <Input
        placeholder="Titles, people, genres"
        animate={{ scaleX: searchOpen ? 1 : 0 }}
      ></Input>
    </Container>
  );
}
