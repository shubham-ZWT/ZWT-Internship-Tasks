import EmployeeContext from "./EmployeeContext";
import React, { useEffect, useState } from "react";
import employeeService from "../services/employeeService";

export default function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEmployee = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await employeeService.getAllEmployees();
      console.log(response);
      //   if (response.success) {
      setEmployees(response);
      //   }
    } catch (err) {
      setError(err?.message || "Failed to load employees");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  const addEmployee = async (employeeData) => {
    setLoading(true);
    try {
      const newEmployee = await employeeService.createEmployee(employeeData);
      setEmployees((prev) => [...prev, newEmployee]);
    } catch (err) {
      setError("Failed to add employee", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, error, loading, fetchEmployee, addEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}
