import React from "react";

export default function Stats() {
  return (
    <div className="stats" style={{ border: "3px solid" }}>
      <h1>Stats Section</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "3rem" }}>
        <div>
          <h3>Number of employees : 10</h3>
        </div>
        <div>
          <h3>Total Projets: 30</h3>
        </div>
      </div>
    </div>
  );
}
