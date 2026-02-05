import React from "react";
import { useEmployees } from "../hooks/useEmployees";

export default function EmployeeListUseEmployees() {
  const { data, isLoading, error } = useEmployees();
  // console.log(data);

  if (isLoading) return <p>Loading employees...</p>;
  if (error) return <p>Failed to load employees</p>;

  return (
    <ul>
      {data.map((emp) => (
        <li key={emp.id}>{emp.first_name}</li>
      ))}
    </ul>
  );
}