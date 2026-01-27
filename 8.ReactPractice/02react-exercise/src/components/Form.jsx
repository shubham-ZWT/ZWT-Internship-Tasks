import React from "react";
import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
    department: "",
    hireDate: "",
  });
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(true);
  const [success, setSuccess] = useState(false);

  const isValid =
    form.firstName !== "" &&
    form.lastName !== "" &&
    form.email !== "" &&
    form.salary !== "" &&
    form.department !== "" &&
    form.hireDate !== "";

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
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      salary: "",
      department: "",
      hireDate: "",
    });
    setSuccess(true);

    console.log(form);
  };

  const handelOnChange = (e) => {
    e.preventDefault();
    setTouched(true);
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handelOnBlur = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);

    if (name === "firstName" || name === "lastName") {
      if (value.length > 2 && !/\d/.test(value)) {
        setForm((prev) => ({ ...prev, [name]: value }));
      } else {
        setError(
          "Firstname, Lastname  must be greater than 2 and must must only contain Characters and not Numbers",
        );
        setTouched(false);
      }
    } else if (name === "email") {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setForm((prev) => ({ ...prev, [name]: value }));
      } else {
        setError("Invalid Email");
        setTouched(false);
      }
    } else if (name === "salary") {
      if (value > 20000) {
        setForm((prev) => ({ ...prev, [name]: value }));
      } else {
        setError("Salary must be greater than 20,000");
        setTouched(false);
      }
    } else if (name === "department") {
      if (value.length > 0) {
        setForm((prev) => ({ ...prev, [name]: value }));
      } else {
        setError("Department is Required");
        setTouched(false);
      }
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <div className="form-div">
        <h1>Advance Form exercise 2.7</h1>
        <form action="" onSubmit={handelFormSubmit}>
          <label htmlFor="firstName">First Name : </label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handelOnChange}
            onBlur={handelOnBlur}
          />
          <br />
          <label htmlFor="lastName">Last Name : </label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handelOnChange}
            onBlur={handelOnBlur}
          />
          <br />
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handelOnChange}
            onBlur={handelOnBlur}
          />
          <br />
          <label htmlFor="Salary">Salary : </label>
          <input
            type="number"
            name="salary"
            value={form.salary}
            onChange={handelOnChange}
            onBlur={handelOnBlur}
          />
          <br />
          <label htmlFor="department">Department Name : </label>
          <input
            type="text"
            name="department"
            value={form.department}
            onChange={handelOnChange}
            onBlur={handelOnBlur}
          />
          <br />
          <label htmlFor="date">Hire Date: </label>
          <input
            type="date"
            name="hireDate"
            value={form.hireDate}
            onChange={handelOnChange}
            onBlur={handelOnBlur}
          />
          <br />
          <button type="submit" disabled={!isValid}>
            Submit Form
          </button>
        </form>
        <p
          style={
            !touched
              ? {
                  display: "block",
                  border: "2px solid red",
                  width: "500px",
                  color: "red",
                }
              : { display: "none" }
          }
        >
          {error}
        </p>
        <p
          style={
            success ? { display: "block", color: "green" } : { display: "none" }
          }
        >
          Form submitted Successfully !
        </p>
      </div>
    </>
  );
}

// Create AddEmployeeForm component
// Fields: firstName, lastName, email, salary, hireDate, department
// Implement controlled inputs for all fields
// Create separate errors state object
// Create separate touched state object
// Validation rules:
// First/Last name: required, min 2 characters, no numbers
// Email: required, valid format (regex)
// Salary: required, positive number, min 20000
// Hire date: required, not in future
// Department: required selection
// Validate on blur (onBlur event)
// Show error messages only for touched fields with errors
// Display errors with red text and red input borders
// Disable submit button if form has errors or is incomplete
// Clear errors when user starts typing in that field
// Show success message after successful submission
// Reset form and validation state after submission
// Add field-level validation functions
// Implement form-level validation before submission
