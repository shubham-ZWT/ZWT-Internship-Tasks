import React from "react";
import PropTypes from "prop-types";

function EmployeeCard({ name, isActive = true, email, salary, hireDate }) {
  let date = new Date(hireDate);
  const longDateFormat = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  let nf = new Intl.NumberFormat();
  //   let isActive = true;
  //   let salary = 50000;
  return (
    <>
      <div
        style={{
          border: "3px solid black",
          padding: "10px 20px",
          width: "300px",
        }}
      >
        <h2>{name}</h2>
        <span
          style={
            isActive
              ? {
                  backgroundColor: "green",
                  color: "white",
                  padding: "4px",
                  borderRadius: "10px",
                }
              : {
                  backgroundColor: "red",
                  color: "white",
                  padding: "4px",
                  borderRadius: "10px",
                }
          }
        >
          Status: {isActive ? "Active" : "Inactive"}
        </span>
        <p>Email :{email}</p>
        <p
          style={
            50000 < salary
              ? {
                  backgroundColor: "yellow",
                  width: "100px",
                  padding: "4px",
                  color: "black",
                  borderRadius: "10px",
                }
              : {
                  width: "100px",
                  backgroundColor: "green",
                  padding: "4px",
                  color: "white",
                  borderRadius: "10px",
                }
          }
        >
          Salary : {nf.format(salary)}
        </p>
        <p>Hire Date : {longDateFormat.format(date)}</p>
      </div>
    </>
  );
}

EmployeeCard.prototype = {
  name: PropTypes.string,
  isActive: PropTypes.bool,
  email: PropTypes.string,
  salary: PropTypes.number,
  hireDate: PropTypes.string,
};
export default EmployeeCard;

// Create an EmployeeCard component with hardcoded employee data
// Display employee first name, last name, email, salary, and hire date
// Use JSX expressions to format salary with thousand separators
// Implement conditional rendering to show different badge colors based on salary range
// Add inline styles for card border, padding, and shadow
// Use ternary operator to show "Active" or "Inactive" status
// Format the hire date to be user-friendly
// Add comments explaining each section
// Include at least 3 different types of conditional rendering
// Use template literals within JSX where appropriate
