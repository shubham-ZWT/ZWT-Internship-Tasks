import React from "react";

export default function EmployeeStatus({
  name,
  isActive,
  isAvailable,
  salary,
  department,
}) {
  let salaryStatus = "";
  if (salary > 80) {
    salaryStatus = "High Earner";
  } else if (50000 < salary < 80000) {
    salaryStatus = "Mid-level";
  } else {
    salaryStatus = "Entry-level";
  }
  return (
    <>
      <div
        className="employee-card"
        style={{ border: "2px solid black", width: "400px" }}
      >
        <h2>Name : {name}</h2>
        <p>Department: {department}</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p
            style={
              isActive
                ? { backgroundColor: "green", width: "80px" }
                : { backgroundColor: "red", width: "100px" }
            }
          >
            {isActive ? "Active" : "Inavtive"}
          </p>
          <p
            style={
              isAvailable
                ? { backgroundColor: "yellow", color: "black", width: "100px" }
                : { backgroundColor: "blue", color: "white", width: "150px" }
            }
          >
            {isAvailable ? "Yes - Available" : "No - On Project"}
          </p>
        </div>
        <div>
          <button
            style={isAvailable ? { display: "block" } : { display: "none" }}
          >
            Add to Project
          </button>
        </div>
        <p
          style={
            !isActive ? { display: "block", color: "red" } : { display: "none" }
          }
        >
          Warning - Employee is Inactive
        </p>
        <p
          style={
            isAvailable
              ? { display: "none" }
              : { display: "block", color: "red" }
          }
        >
          Warning - Employee is not on Project
        </p>
        <p>Salary Status : {salaryStatus} </p>
      </div>
    </>
  );
}
