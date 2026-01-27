import React from "react";
import EmployeeCard from "./EmployeeCard";

export default function EmployeeSection() {
  return (
    <div style={{ border: "3px solid" }}>
      <h1>Employee Section</h1>
      <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap", padding:"3px"}}>
        <EmployeeCard
          name={"Shubham Patel"}
          email={"shubham.patel@zealousweb.com"}
          hireDate={"2026-01-01"}
          salary={50000}
          isActive={true}
        />
        <EmployeeCard
          name={"Yash"}
          email={"yash@gmailcom"}
          hireDate={"2026-06-01"}
          salary={80000}
        />
        <EmployeeCard
          name={"Meet "}
          email={"meet@gmail.com"}
          hireDate={"2026-09-09"}
          salary={30000}
          isActive={false}
        />
        <EmployeeCard
          name={"Shubham Patel"}
          email={"shubham.patel@zealousweb.com"}
          hireDate={"2026-01-01"}
          salary={50000}
          isActive={true}
        />
        <EmployeeCard
          name={"Yash"}
          email={"yash@gmailcom"}
          hireDate={"2026-06-01"}
          salary={80000}
        />
        <EmployeeCard
          name={"Meet "}
          email={"meet@gmail.com"}
          hireDate={"2026-09-09"}
          salary={30000}
          isActive={false}
        />
      </div>
    </div>
  );
}
