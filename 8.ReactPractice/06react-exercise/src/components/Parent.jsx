import React from "react";
import Child from "./Child";
import { useState } from "react";
import { useCallback } from "react";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const onIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <h2>{count}</h2>
      <Child onIncrement={onIncrement} />

      <button onClick={toggleTheme}>Change theme </button>
    </>
  );
}
