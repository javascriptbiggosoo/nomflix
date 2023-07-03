import { Outlet } from "react-router-dom";
import Header from "../components/Layouts/Header/Index";

export default function RootLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}
