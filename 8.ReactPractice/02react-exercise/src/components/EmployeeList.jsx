import React from "react";
import EmployeeStatus from "./EmployeeStatus";
import { useState } from "react";
export default function EmployeeList() {
  const [searchTerm, setSearchTerm] = useState("");

  const employees = [
    {
      id: 1,
      name: "Shubham",
      email: "sanket@gmail.com",
      department: "Web dev",
      salary: 50000,
    },
    {
      id: 2,
      name: "zxc",
      email: "xcv@gmail.com",
      department: "UI Ux",
      salary: 40000,
    },
    {
      id: 3,
      name: "wer",
      email: "wer@gmail.com",
      department: "Marketing",
      salary: 60000,
    },
    {
      id: 4,
      name: "ghj",
      email: "ghj@gmail.com",
      department: "Web dev",
      salary: 90000,
    },
  ];

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalSalary = filteredEmployees.reduce(
    (sum, emp) => sum + Number(emp.salary),
    0,
  );
  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     setSearchTerm(e.target.value);
  //     employees.filter((emp) => emp.email.includes(searchTerm));
  //     console.log(employees);
  //   };
  const handelClearSearch = () => {
    setSearchTerm("");
  };
  return (
    <>
      <div>
        <h1>Employee List</h1>
        <label htmlFor="searchEmployee">Search Employee : </label>
        <input
          type="search"
          name="searchEmployee"
          id=""
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handelClearSearch}>Clear Filter</button>
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Salary</th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.map((e) => (
              <tr
                key={e.id}
                style={
                  Number(e.id) % 2 === 0
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "black", color: "white" }
                }
              >
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.department}</td>
                <td>{e.salary}</td>
              </tr>
            ))}

            <tr>
              <td colSpan="3">
                Total Employee : {filteredEmployees.length} of{" "}
                {employees.length}
              </td>
              <td colSpan={2}>Total Salary : {totalSalary}</td>
            </tr>
            {filteredEmployees.length === 0 && (
              <tr>
                <td colSpan={5}>No Employees Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
