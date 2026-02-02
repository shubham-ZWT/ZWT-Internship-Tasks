import React, { useState } from "react";
import { useContext } from "react";
import EmployeeContext from "../contexts/EmployeeContext";
import AuthContext from "../contexts/AuthContext";

export default function EmployeePage() {
  const [empData, setEmpData] = useState({
    first_name: "",
    last_name: "",
    salary: "",
    email: "",
  });
  const { employees, error, loading, fetchEmployee, addEmployee } =
    useContext(EmployeeContext);
  const { login, isAuthenticated } = useContext(AuthContext);

  const handelLogin = () => {
    const credentials = {
      email: "sanket@gmail.com",
      password: "123",
    };

    login(credentials);
  };

  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setEmpData((prev) => ({ ...prev, [name]: value }));
  };

  const onCreateEmployee = async(e) => {
    e.preventDefault();
    console.log(empData);
    await addEmployee(empData);
  };
  if (error) {
    return (
      <>
        <div>
          <h1>Error</h1>
          <button onClick={fetchEmployee}>Try again Fetching Employees</button>
        </div>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <div>
          <h1>Loading...</h1>
        </div>
      </>
    );
  } else if (isAuthenticated) {
    return (
      <>
        <div>
          <h1>Employee Data</h1>
          {employees.map((emp) => (
            <li key={emp.id}>{emp.first_name}</li>
          ))}
        </div>

        <div>
          <h1>Add Employee</h1>
          <form action="" onSubmit={onCreateEmployee}>
            <label htmlFor="first_name">First Name </label>
            <input
              type="text"
              name="first_name"
              value={empData.first_name}
              onChange={handelOnChange}
            />

            <label htmlFor="last_name">Last Name </label>
            <input
              type="text"
              name="last_name"
              value={empData.last_name}
              onChange={handelOnChange}
            />

            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              value={empData.email}
              onChange={handelOnChange}
            />

            <label htmlFor="salary">Salary </label>
            <input
              type="number"
              name="salary"
              value={empData.salary}
              onChange={handelOnChange}
            />

            <button type="submit">Submit Form</button>
          </form>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Unauthenticated</h1>
        <button onClick={handelLogin}> Login </button>
      </>
    );
  }
}
