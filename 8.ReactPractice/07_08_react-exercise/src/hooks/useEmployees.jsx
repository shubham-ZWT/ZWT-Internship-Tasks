// import React from "react";
// import { useState, useEffect, useCallback } from "react";
// import employeeService from "../services/employeeService";

// export default function useEmployees() {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   //Get all employees
//   const fetchEmployees = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     console.log("here");

//     try {
//       const data = await employeeService.getAllEmployees();
//       console.log(data);
//       setEmployees(data);
//     } catch (err) {
//       setError(err.message || "Failed to fetch employees");
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   //Delete an Employee
//   const deleteEmployee = useCallback(async (id) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const data = await employeeService.deleteEmployee(id);
//       console.log(data);
//       setEmployees((prev) => prev.filter((emp) => emp.id !== id));
//     } catch (err) {
//       setError(err.message || "Failed to delete employees");
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchEmployees();
//   }, [fetchEmployees]);

//   return { employees, error, loading, fetchEmployees, deleteEmployee };
// }

//Use Query
import { useQuery } from "@tanstack/react-query";
import employeeService from "../services/employeeService";

export function useEmployees() {
  return useQuery({
    queryKey: ["employees"],
    queryFn: employeeService.getAllEmployees,
  });
}
