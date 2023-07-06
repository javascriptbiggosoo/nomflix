import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TVPage from "./pages/TVPage";
import SearchPage from "./pages/SearchResultPage";
import RootLayout from "./pages/RootLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/movies/:movieId", element: <HomePage /> },
        { path: "/tv", element: <TVPage /> },
        { path: "/tv/:showId", element: <TVPage /> },
        { path: "/search", element: <SearchPage /> },
      ],
    },
  ],
  { basename: "/nomflix" }
);

function App() {
  return (
    <>
      <ReactQueryDevtools></ReactQueryDevtools>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
