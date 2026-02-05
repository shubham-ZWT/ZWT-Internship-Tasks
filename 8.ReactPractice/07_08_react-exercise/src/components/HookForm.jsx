import React from "react";
import { useForm } from "react-hook-form";

export default function EmployeeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div>
      {/* <h1>Employee Form</h1> */}

      <form onSubmit={handleSubmit(onSubmit)}>
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
            type="text"
            {...register("firstName", {
              required: "First name is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
            })}
          />
          {errors.firstName && (
            <div style={{ color: "#fefefe" }}>{errors.firstName.message}</div>
          )}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <div style={{ color: "#fefefe" }}>{errors.email.message}</div>
          )}

          <label htmlFor="salary">Salary</label>
          <input
            id="salary"
            type="number"
            {...register("salary", {
              required: "Salary is required",
              min: {
                value: 10000,
                message: "Salary must be at least 10,000",
              },
            })}
          />
          {errors.salary && (
            <div style={{ color: "#fefefe" }}>{errors.salary.message}</div>
          )}

          <label htmlFor="hireDate">Hire Date</label>
          <input
            id="hireDate"
            type="date"
            {...register("hireDate", {
              required: "Hire date is required",
            })}
          />
          {errors.hireDate && (
            <div style={{ color: "#fefefe" }}>{errors.hireDate.message}</div>
          )}

          
          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: "#fefefe",
                border: "none",
                width: "100px",
                padding: "5px",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
