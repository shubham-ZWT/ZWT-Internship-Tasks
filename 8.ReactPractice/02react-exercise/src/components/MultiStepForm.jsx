import React, { useState } from "react";

export default function MultiStepForm() {
  const [pageCount, setPageCount] = useState(1);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(true);
  //   const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
    department: "",
    hireDate: "",
  });

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

  const handleNextPrev = (e) => {
    e.preventDefault();
    console.log("current value", e.target.id);
    if (Number(e.target.id) === 1) {
      setPageCount(pageCount - 1);
      console.log("prev", pageCount);
    } else if (Number(e.target.id) === 2) {
      setPageCount(pageCount + 1);
      console.log("next", pageCount);
    }
  };

  return (
    <>
      <div>
        <h2>Multi Step Form</h2>

        <form action="" onSubmit={handelFormSubmit}>
          {/* Personal Details */}
          <div
            style={pageCount === 1 ? { display: "block" } : { display: "none" }}
          >
            <h2>Personal Info</h2>
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={handelOnChange}
              onBlur={handelOnBlur}
            />
            <br />
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={handelOnChange}
              onBlur={handelOnBlur}
            />
            <br />
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handelOnChange}
              onBlur={handelOnBlur}
            />
          </div>
          {/* EmploymentInfo */}
          <div
            style={pageCount === 2 ? { display: "block" } : { display: "none" }}
          >
            <h2>Employment Info</h2>
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
          </div>
          {/* Review and Submit */}
          <div
            style={pageCount === 3 ? { display: "block" } : { display: "none" }}
          >
            <p>{form.firstName}</p>
            <p>{form.lastName}</p>
            <p>{form.email}</p>
            <p>{form.department}</p>
            <p>{form.salary}</p>
            <p>{form.hireDate}</p>
          </div>
          <button
            type="button"
            style={pageCount < 3 ? { display: "block" } : { display: "none" }}
            onClick={handleNextPrev}
            id="1"
          >
            Prev
          </button>
          <button
            type="submit"
            style={pageCount === 3 ? { display: "block" } : { display: "none" }}
          >
            Submit
          </button>
          <button
            type="button"
            style={pageCount < 3 ? { display: "block" } : { display: "none" }}
            onClick={handleNextPrev}
            id="2"
          >
            Next
          </button>
          <p>Step : {pageCount} of 3</p>
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
      </div>
    </>
  );
}
