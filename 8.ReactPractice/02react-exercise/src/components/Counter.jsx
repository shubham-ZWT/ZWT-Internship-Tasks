import React from "react";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [isDisabled, setIsdisabled] = useState(false);
  const increaseCounter = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      setIsdisabled(true);
    }
  };
  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const reSet = () => {
    setCounter(0);
  };
  const increaseFive = () => {
    setCounter(counter + 5);
  };
  const decreaseFive = () => {
    setCounter(counter - 5);
  };
  const MultiplyTwo = () => {
    setCounter(counter * 2);
  };
  const DivideTwo = () => {
    setCounter(counter / 2);
  };

  return (
    <>
      <p>Counter Value : {counter}</p>
      <p style={counter > 17 ? { display: "block" } : { display: "none" }}>
        You are about to hit the limit
      </p>
      <button onClick={increaseCounter} disabled={isDisabled}>
        Increase
      </button>
      <button
        onClick={decreaseCounter}
        style={
          counter > 10 ? { backgroundColor: "green" } : { backgroundColor: "" }
        }
      >
        Decrease
      </button>
      <button onClick={reSet}>Reset</button>
      <button onClick={increaseFive}>Increase by 5</button>
      <button onClick={decreaseFive}>Decrease by 5</button>
      <button onClick={MultiplyTwo}>Multiply by 2</button>
      <button onClick={DivideTwo}>Divide by 2</button>
    </>
  );
}
