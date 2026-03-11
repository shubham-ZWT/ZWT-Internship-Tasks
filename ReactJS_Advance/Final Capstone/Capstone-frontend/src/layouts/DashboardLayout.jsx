import React from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <DashboardNavbar />
      <Outlet />
    </div>
  );
}
