import React from "react";

export default function Button({ text, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        style={{
          backgroundColor: "purple",
          padding: "4px",
          borderRadius: "10px",
          color: "white",
        }}
      >
        {text}
      </button>
    </>
  );
}
