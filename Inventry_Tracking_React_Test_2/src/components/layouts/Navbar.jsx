import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const NAV_LINKS = [
    { name: "Dashboard", location: "/" },
    { name: "View All Orders", location: "/orders" },
    { name: "Place New Order", location: "/place-order" },
    { name: "Check Warehouse Stock", location: "/warehouse/1/stock" },
  ];
  return (
    <div className="w-full top-0 left-0 right-0 bottom-0 p-4 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
        <div>
          <Link to="/">
            <h1 className="font-bold tracking-tighter text-3xl ">Logo</h1>
          </Link>
        </div>
        <div className="flex flex-row gap-6">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.location}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold " : "text-gray-700"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
