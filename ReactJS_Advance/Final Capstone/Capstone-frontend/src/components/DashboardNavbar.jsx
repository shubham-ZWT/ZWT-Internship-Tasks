import React from "react";
import useAuthStore from "../stores/authStore";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function DashboardNavbar() {
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const navLinks = [
    { name: "Dashboard", location: "/dashboard" },
    { name: "Employee Management", location: "/dashboard/employee-management" },
    { name: "Reports", location: "/dashboard/reports" },
  ];

  const handleLogout = async () => {
    await logout();
    return navigate("/login");
  };
  return (
    <div className="w-full top-0 bottom-0 left-0 right-0 border-b ">
      <div className="max-w-7xl mx-auto py-5">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="font-semibold text-2xl">Dashboard</h1>
          </div>
          <div className="flex flex-row gap-6 items-center">
            {navLinks.map((link) => (
              <Link to={link.location}>{link.name}</Link>
            ))}
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded-full text-white"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
