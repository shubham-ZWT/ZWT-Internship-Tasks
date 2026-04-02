import React from "react";
import useAuth from "../store/useAuth";
import { Outlet, NavLink, Link } from "react-router-dom";
import useCart from "../store/useCart";

export default function DashboardLayout() {
  const navLinks = [
    { name: "Dashboard", location: "/dashboard" },
    { name: "Product Management", location: "/dashboard/product-management" },
  ];

  const { logout, user } = useAuth();
  const { items } = useCart();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <nav className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-row justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-blue-600">Logo</h1>

            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-row gap-4 items-center">
                {navLinks.map((link) => (
                  <NavLink
                    to={link.location}
                    key={link.location}
                    end={link.location === "/dashboard"}
                    className={({ isActive }) =>
                      `transition-colors ${
                        isActive
                          ? "text-blue-700 font-bold"
                          : "text-gray-600 hover:text-blue-500"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <div className="relative bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full border border-green-200">
                  <Link to="/dashboard/cart">Cart: {items.length}</Link>
                </div>

                <div className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full border border-blue-200">
                  User: {user || "Guest"}
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all font-semibold border border-red-200 px-4 py-1.5 rounded-full"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto w-full p-6">
        <Outlet />
      </main>
    </div>
  );
}
