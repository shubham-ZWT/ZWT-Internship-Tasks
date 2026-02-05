import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

//Mannual Validation
// const validate = (values) => {
//   const errors = {};

//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length < 2) {
//     errors.firstName = "Name must be greater than 2 char ";
//   }

//   if (!values.email) {
//     errors.email = "Email Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Invalid Email input";
//   }

//   if (!values.salary) {
//     errors.salary = "Required";
//   } else if (values.salary < 20000) {
//     errors.salary = "Minimum salary is 20000";
//   }

//   return errors;
// };

//Validation using Yup
const employeeSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "Minimum 2 char")
    .matches(/^[A-Za-z]+$/, "No numbers allowed"),

  email: Yup.string().required("Email is required").email("Invalid Email"),

  salary: Yup.number()
    .required("Salary is Required")
    .min(20000, "Minimum salary is 20000"),
});

export default function EmployeeForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      salary: "",
      hireDate: "",
    },

    // for manual validation
    // validate,

    // validation using yup
    validationSchema: employeeSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      {/* <h1>EmployeeForm</h1> */}

      <form action="" onSubmit={formik.handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            backgroundColor: "#3f71f4",
            padding: "15px",
            borderRadius: "10px",
            color: "#e4f6ff",
          }}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div style={{ color: "#fefefe" }}>{formik.errors.firstName}</div>
          )}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: "#fefefe" }}>{formik.errors.email}</div>
          )}

          <label htmlFor="salary">Salary</label>
          <input
            id="salary"
            name="salary"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.salary}
            onBlur={formik.handleBlur}
          />
          {formik.touched.salary && formik.errors.salary && (
            <div style={{ color: "#fefefe" }}>{formik.errors.salary}</div>
          )}

          <label htmlFor="hireDate">Hire Date</label>
          <input
            id="hireDate"
            name="hireDate"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.hireDate}
            onBlur={formik.handleBlur}
          />

          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
              style={{
                backgroundColor: "#fefefe",
                border: "none",
                width: "100px",
                padding: "5px",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              {formik.isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
