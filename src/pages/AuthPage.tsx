import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

export default function AuthPage() {
  const navigate = useNavigate();

  const handleSocialClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const provider = new GoogleAuthProvider();
    const loginWithGoogle = async () => {
      const result = await signInWithPopup(authService, provider);
      console.log(result);
      const user = result.user;
      navigate("/");
    };
    loginWithGoogle();
  };
  return (
    <Container>
      <button onClick={handleSocialClick}>구글로 간편하게 로그인</button>
    </Container>
  );
}
