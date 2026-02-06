import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AppLayout from "../layouts/AppLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />}></Route>
      </Route>
    </Routes>
  );
}
