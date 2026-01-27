import React from "react";

export default function Footer() {
  let currentDate = new Date();
  return (
    <>
      <footer>
        <p>Footer here</p>
        <p>Ek Company {currentDate.getFullYear()}</p>
      </footer>
    </>
  );
}
