import { signOut } from "firebase/auth";
import React from "react";
import styled from "styled-components";
import { authService } from "../fbase";
import { useNavigate } from "react-router-dom";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  height: 100vh;
`;
export default function ProfilePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    signOut(authService)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <h1>Profile Page</h1>
      <button onClick={handleClick}>로그아웃</button>
    </Container>
  );
}
