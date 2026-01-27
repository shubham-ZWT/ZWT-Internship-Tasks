import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;

    if (isRunning) {
      console.log("Use Effect running");
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      console.log("Clearing");
      clearTimeout(interval);
    };
  }, [isRunning]);

  const handelPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handelReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <>
      <div
        style={
          seconds < 10
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
      >
        <h1>Hello from Timer in userEffect {seconds}</h1>
        <button onClick={handelPause}>{isRunning ? "Pause" : "Start"}</button>
        <button onClick={handelReset}>Reset Timer</button>
      </div>
    </>
  );
}
