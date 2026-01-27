import React from "react";

function Welcome() {
  const d = new Date();
  return (
    <>
      <h1>Welcome Zealous Web</h1>
      <h4>Solve the unsolved</h4>
      <p>current year {d.getFullYear()}</p>
    </>
  );
}

export default Welcome;
