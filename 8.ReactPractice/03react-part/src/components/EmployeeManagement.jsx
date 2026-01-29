import React, { useState } from "react";
import CreateEmployee from "./CreateEmployee";
import EditEmployee from "./EditEmployee";
import EmployeeList from "./EmployeeList";

export default function EmployeeManagement() {
  const [action, setAction] = useState("list");
  const handelActionChange = (e) => {
    setAction(e.target.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Complete Employee Management </h1>

        <label htmlFor="action">Choose you Action Here</label>
        <select
          name="action"
          id=""
          value={action}
          onChange={handelActionChange}
          style={{ backgroundColor: "",borderColor:"" }}
        >
          <option value="list">List All Employees</option>
          <option value="add">Add Employee</option>
          <option value="edit">Edit Employee</option>
        </select>

        {action === "list" ? (
          <EmployeeList />
        ) : action === "add" ? (
          <CreateEmployee />
        ) : (
          <EditEmployee />
        )}
        {/* <EmployeeList />
      <CreateEmployee />
      <EditEmployee /> */}
      </div>
    </>
  );
}
