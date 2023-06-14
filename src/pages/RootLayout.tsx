import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layouts/header/Index";

export default function RootLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}
