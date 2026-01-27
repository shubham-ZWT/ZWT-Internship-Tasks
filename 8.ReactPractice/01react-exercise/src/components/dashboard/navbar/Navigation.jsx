import React from "react";

export default function Navigation() {
  return (
    <nav style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
      <a href="#">Home</a>
      <a href="#">Employess</a>
      <a href="#">Dashboard</a>
    </nav>
  );
}
