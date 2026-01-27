import React from "react";

export default function Badge({ text, color = "grey" }) {
  return (
    <>
      <span
        style={
          text === "Active"
            ? { backgroundColor: "green" }
            : { backgroundColor: color }
        }
      >{text}</span>
    </>
  );
}
