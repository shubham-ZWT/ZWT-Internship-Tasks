import React from "react";

export default function Sidebar() {
  return (
    <>
      <aside className="sidebar" style={{ border: "2px solid black"}}>
        <ul style={{ listStyle: "none" }}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Employee</a>
          </li>
          <li>
            <a href="#">Dashboard</a>
          </li>
        </ul>
      </aside>
    </>
  );
}
