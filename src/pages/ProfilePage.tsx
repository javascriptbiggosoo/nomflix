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
`;

const MainTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  align-self: flex-start;
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
      <button onClick={handleClick}>로그아웃</button>
    </Container>
  );
}
