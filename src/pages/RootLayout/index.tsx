import { Outlet } from "react-router-dom";

import Header from "./Layouts/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
