import React from "react";
import Sidebar from "./Sidebar";
import Stats from "../stats/Stats";
import EmployeeCard from "../employee/EmployeeCard";
import EmployeeSection from "../employee/EmployeeSection";
export default function Dashboard() {
  return (
    <div
      className="main-dashboard"
      style={{
        display: "flex",
        gap: "3rem",
        border: "2px solid black",
        // flexWrap: "wrap",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column", padding: "0px", gap:"2rem" }}>
        {/* Employee Section */}
        <EmployeeSection />
        <Stats />
      </div>
    </div>
  );
}
