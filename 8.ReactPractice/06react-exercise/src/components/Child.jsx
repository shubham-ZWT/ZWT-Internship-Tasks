import React from "react";

const Child = React.memo(({ onIncrement }) => {
  console.log("Child rendered");
  return <button onClick={onIncrement}>Increment from Child</button>;
});

export default Child;
