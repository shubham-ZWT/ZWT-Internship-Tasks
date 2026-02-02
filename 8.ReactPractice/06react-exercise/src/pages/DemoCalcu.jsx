import { useState, useMemo } from "react";
import React from "react";

function expensiveSum(numbers) {
  console.log("Calculating sum...");
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

export default function DemoCalcu() {
  const [count, setCount] = useState(0);

  // const numbers = Array.from({ length: 5_000_000 }, (_, i) => i);

  // const sum = expensiveSum(numbers);

  const numbers = useMemo(
    () => Array.from({ length: 5_000_000 }, (_, i) => i),
    [],
  );

  const sum = useMemo(() => expensiveSum(numbers), [numbers]);

  return (
    <>
      <h2>Sum: {sum}</h2>
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </>
  );
}
