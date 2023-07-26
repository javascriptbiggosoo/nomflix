import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TvPage from "./pages/TvPage";
import SearchPage from "./pages/SearchResultPage";
import RootLayout from "./pages/RootLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthPage from "./pages/AuthPage";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { authService } from "./fbase";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "./atoms";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/movies/:movieId", element: <HomePage /> },
        { path: "/tv", element: <TvPage /> },
        { path: "/tv/:showId", element: <TvPage /> },
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
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        // 추가 작업... 뭐 setIsLoggedIn 처리를 해준다거나 하겠죠
        const uid = user.uid;
        setIsLoggedIn(true);
      } else {
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
