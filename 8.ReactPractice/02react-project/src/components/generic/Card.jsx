import React from "react";

export default function Card({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      <div>{children}</div>
    </>
  );
}
