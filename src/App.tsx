import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchResultPage";
import RootLayout from "./pages/RootLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthPage from "./pages/AuthPage";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { authService } from "./fbase";
import { useRecoilState } from "recoil";
import { currentUserState, isLoggedInState } from "./atoms";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/movies/:movieId", element: <HomePage /> },
        { path: "/search", element: <SearchPage /> },
        { path: "/login", element: <AuthPage /> },
        { path: "/profile", element: <ProfilePage /> },
      ],
    },
  ],
  { basename: "/nomflix" }
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        setIsLoggedIn(true);
        setCurrentUser({
          uid,
          email,
          displayName,
        });
      } else {
        console.log("no user");
        setIsLoggedIn(false);

        // 사용자가 로그아웃한 상태
        // 추가 작업...
      }
    });
  }, []);

  return (
    <>
      <ReactQueryDevtools></ReactQueryDevtools>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
