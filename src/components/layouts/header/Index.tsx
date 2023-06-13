import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: aliceblue;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  height: 80px;
`;
const Col = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.svg`
  margin-right: 50px;
`;
const Items = styled.ul`
  display: flex;
  align-items: center;
`;
const Item = styled.li`
  margin-right: 20px;
`;

export default function Header() {
  return (
    <Nav>
      <Col>
        <Logo></Logo>
        <Items>
          <Item>Home</Item>
          <Item>TV Shows</Item>
        </Items>
      </Col>
      <Col>
        <input type="text" placeholder="" />
        <button>Search</button>
      </Col>
    </Nav>
  );
}
