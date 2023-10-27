import { Suspense, lazy, useEffect } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { onAuthStateChanged } from "firebase/auth";
import { useRecoilState } from "recoil";
import { currentUserState, isLoggedInState } from "./atoms";

import { authService } from "./fbase";
import Loading from "./components/UI/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const SearchPage = lazy(() => import("./pages/SearchResultPage"));
const RootLayout = lazy(() => import("./pages/RootLayout"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));

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
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
