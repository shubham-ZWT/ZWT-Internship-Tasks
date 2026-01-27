import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="card-div">
      <h3>{title}</h3>
      <div className="card-child">{children}</div>
    </div>
  );
}
