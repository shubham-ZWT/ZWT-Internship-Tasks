import React from "react";

export default function DeptCard({ deptName, deptLocation }) {
  return (
    <div
      style={{
        backgroundColor: "#1A3263",
        width: "200px",
        color: "white",
      }}
    >
      <h4>Department : {deptName}</h4>
      <h4>Location : {deptLocation}</h4>
    </div>
  );
}
