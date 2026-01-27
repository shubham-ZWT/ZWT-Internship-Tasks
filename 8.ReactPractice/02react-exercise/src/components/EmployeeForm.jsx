import React from "react";
import { useState } from "react";
export default function EmployeeForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
    department: "",
    hireDate: "",
  });
  const isValid =
    form.firstName !== "" &&
    form.lastName !== "" &&
    form.email !== "" &&
    form.salary !== "" &&
    form.department !== "" &&
    form.hireDate !== "";

  const handelOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((pres) => ({ ...pres, [name]: value }));
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.salary ||
      !form.department ||
      !form.hireDate
    ) {
      alert("All fields are necessary");
    }

    console.log(form);
  };
  return (
    <>
      <div>
        <form action="" onSubmit={handelFormSubmit}>
          <label htmlFor="firstName">First Name : </label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handelOnChange}
          />
          <br />
          <label htmlFor="lastName">Last Name : </label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handelOnChange}
          />
          <br />
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handelOnChange}
          />
          <br />
          <label htmlFor="Salary">Salary : </label>
          <input
            type="number"
            name="salary"
            value={form.salary}
            onChange={handelOnChange}
          />
          <br />
          <label htmlFor="department">Department Name : </label>
          <input
            type="text"
            name="department"
            value={form.department}
            onChange={handelOnChange}
          />
          <br />
          <label htmlFor="date">Hire Date: </label>
          <input
            type="date"
            name="hireDate"
            value={form.hireDate}
            onChange={handelOnChange}
          />
          br
          <button type="submit" disabled={!isValid}>
            Submit Form
          </button>
        </form>
      </div>
    </>
  );
}

// Exercise 2.2: Employee Form with Object State
// Create EmployeeForm component
// Use single state object containing all form fields
// Fields: firstName, lastName, email, salary, department, hireDate
// Each input should be controlled
// Implement single handleChange function using computed property names
// Display current form state below the form in real-time
// Add a submit handler that logs the complete employee object
// Clear form after successful submission
// Show validation errors next to each field
// Disable submit button until all fields are filled
