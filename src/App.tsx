import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TVPage from "./pages/TVPage";
import SearchPage from "./pages/SearchPage";
import Header from "./components/layouts/header/Index";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/tv", element: <TVPage /> },
  { path: "/search", element: <SearchPage /> },
]);

function App() {
  return (
    <>
      <Header></Header>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
