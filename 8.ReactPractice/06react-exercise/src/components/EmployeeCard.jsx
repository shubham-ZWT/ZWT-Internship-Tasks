import React from "react";
import LazyImage from "./LazyImage";

export default function EmployeeCard({ employee }) {
  return (
    <>
      <div className="card">
        <LazyImage src={employee.photo} />
        <h4>{employee.name}</h4>
      </div>
    </>
  );
}
