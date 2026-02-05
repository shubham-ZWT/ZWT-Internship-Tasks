import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import React from "react";

export default function EmployeeTable() {
  const employees = [
    { id: 1, name: "Sanket", department: "web dev", salary: 60000 },
    { id: 2, name: "Yash", department: "DB", salary: 60000 },
    { id: 3, name: "Meet", department: "Editor", salary: 60000 },
    { id: 4, name: "Sahal", department: "AI", salary: 60000 },
    { id: 5, name: "Honey", department: "N8N", salary: 60000 },
  ];
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Salary</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {employees.map((emp) => (
              <TableRow>
                <TableCell>{emp.id}</TableCell>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.department}</TableCell>
                <TableCell>{emp.salary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
