import React, { useState } from "react";
import employeeService from "../services/employeeService";
import { useNavigate } from "react-router-dom";

export default function CreateEmployee() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    salary: "",
    hire_date: "",
  });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handelOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((pres) => ({ ...pres, [name]: value }));
  };

  const handelFormSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.first_name ||
      !form.last_name ||
      !form.email ||
      !form.salary ||
      !form.hire_date
    ) {
      alert("All fields are necessary");
    }

    const response = await employeeService.createEmployee(form);
    console.log(response);
    if (response.success) {
      console.log(response.success);
      setSuccess(true);
      setTimeout(() => {
        navigate("/employees");
      }, 3000);
    }
    console.log(response.success);
    // console.log(form);
  };
  const isValid =
    form.first_name !== "" &&
    form.last_name !== "" &&
    form.email !== "" &&
    form.salary !== "" &&
    form.hire_date !== "";

  return (
    <>
      <div
        style={{ backgroundColor: "#234232", padding: "30px", color: "white" }}
      >
        <h1 style={{ textAlign: "center" }}>Create Employee</h1>
        <form action="" onSubmit={handelFormSubmit}>
          <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <label htmlFor="frifirst_namest_name">First Name </label>
            <input
              type="text"
              name="first_name"
              value={form.first_name}
              onChange={handelOnChange}
            />

            <label htmlFor="last_name">Last Name </label>
            <input
              type="text"
              name="last_name"
              value={form.last_name}
              onChange={handelOnChange}
            />

            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handelOnChange}
            />

            <label htmlFor="salary">Salary </label>
            <input
              type="number"
              name="salary"
              value={form.salary}
              onChange={handelOnChange}
            />

            <label htmlFor="hireDate">Hire Date </label>
            <input
              type="date"
              name="hire_date"
              value={form.hire_date}
              onChange={handelOnChange}
            />

            <button
              type="submit"
              disabled={!isValid}
              style={{
                backgroundColor: "#E5D9B6",
                borderRadius: "10px",
                padding: "5px",
                marginTop: "10px",
              }}
            >
              Submit Form
            </button>
            <p style={{ textAlign: "center" }}>
              {success ? "UserCreated" : ""}
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
