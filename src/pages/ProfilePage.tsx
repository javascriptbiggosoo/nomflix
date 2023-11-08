import { signOut } from "firebase/auth";
import styled from "styled-components";
import { authService, dbService } from "../fbase";
import { useNavigate } from "react-router-dom";
import { currentUserState } from "../atoms";
import { useRecoilState } from "recoil";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background-color: #141414;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #e5e5e5;
  padding: 0 20px; // added some padding for better responsiveness on smaller screens
`;

const MainTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  color: #e5e5e5;
`;

const LogoutButton = styled.button`
  background-color: #e50914;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.25s ease;
  margin-top: 20px;

  &:hover {
    background-color: #f40612;
  }
`;

export default function ProfilePage() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

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
      <MainTitle>{currentUser?.displayName || "회원"} 님의 프로필</MainTitle>
      <LogoutButton onClick={handleClick}>로그아웃</LogoutButton>
    </Container>
  );
}
