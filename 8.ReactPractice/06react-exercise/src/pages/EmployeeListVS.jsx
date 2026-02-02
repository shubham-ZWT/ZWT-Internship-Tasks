import React from "react";
import VirtualizedEmployeeList from "../components/VirtualizedEmployeeList";
import { useState } from "react";
import { useMemo } from "react";
import { useDeferredValue } from "react";

export default function EmployeeListVS() {
  const [search, setSearch] = useState("");

  const employees = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => ({
        id: i + 1,
        name: `Employee ${i + 1}`,
        department: "Engineering",
      })),
    [],
  );

  const deferredSearch = useDeferredValue(search);

  const filteredEmployees = useMemo(() => {
    console.log("Filtering Employees...");
    return employees.filter((emp) =>
      emp.name.toLowerCase().includes(deferredSearch.toLowerCase()),
    );
  }, [employees, deferredSearch]);

  return (
    <>
      {/* <div>
        {employees.map((e) => (
          <div key={e.id}>{e.name}</div>
        ))}
      </div> */}

      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "300px", marginBottom: "10px" }}
      />

      <div style={{ height: "800px" }}>
        <VirtualizedEmployeeList employees={filteredEmployees} />
      </div>
    </>
  );
}
