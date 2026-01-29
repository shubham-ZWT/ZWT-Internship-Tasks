import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Breadcrumbs />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
