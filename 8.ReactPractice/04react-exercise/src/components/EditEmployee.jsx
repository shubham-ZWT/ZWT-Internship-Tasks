import React, { useEffect, useState } from "react";
import employeeService from "../services/employeeService";
import { useParams } from "react-router-dom";

export default function EditEmployee() {
  const [save, setSave] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    salary: "",
    hire_date: "",
  });
  // const [userId, setUserID] = useState(2);

  const { id } = useParams();
  useEffect(() => {
    const fetchUser = async (id) => {
      const data = await employeeService.getEmployeeById(Number(id));
      const user = data[0];
      //   setEmployee(data);
      setForm({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        salary: user.salary,
        hire_date: user.hire_date,
      });
    };

    fetchUser(id);
  }, [id]);

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

    const response = await employeeService.updateEmployee(id, form);
    if (response.success) {
      setSave(true);
    }
    console.log(response);
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
        style={{ backgroundColor: "#234232", padding: "40px", color: "white" }}
      >
        <h1 style={{ textAlign: "center" }}>Edit Employee</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            color: "white",
          }}
        >
          {/* <label htmlFor="userID">User Id to Edit : </label>
          <input
            type="userID"
            name="userID"
            value={userId}
            onChange={(e) => {
              setUserID(e.target.value);
            }}
          /> */}
        </div>

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
          </div>
        </form>
        {save ? <button>Save</button> : <></>}
      </div>
    </>
  );
}
