import React from "react";
import { useMemo } from "react";
import EmployeeCard from "../components/EmployeeCard";

export default function ImageOptimi() {
  const employees = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => ({
        id: i + 1,
        name: `Employee ${i + 1}`,
        department: "Engineering",
        photo: "/profile_test.jpg",
      })),
    [],
  );

  return (
    <>
      <h1>Image Optimization</h1>
      {employees.map((emp) => (
        <div key={emp.id}>
          <EmployeeCard employee={emp} />
        </div>
      ))}
    </>
  );
}
