import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="w-full flex flex-row h-screen overflow-hidden">
      <div className="flex-none border-r border-gray-200">
        <Sidebar />
      </div>
      <main className="flex-1 h-full overflow-y-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
