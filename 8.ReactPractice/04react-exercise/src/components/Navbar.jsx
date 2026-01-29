import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#BFC9D1", color: "#25343F" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "700px",
          marginLeft: "30px",
          marginRight: "30px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "60px" }}>
          <NavLink to="/">
            <img
              src="/logo.jpg"
              alt="Logo"
              style={{ height: "40px", cursor: "pointer" }}
            />
          </NavLink>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#FF9B51" : "#25343F",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#FF9B51" : "#25343F",
            })}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#FF9B51" : "#25343F",
            })}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
