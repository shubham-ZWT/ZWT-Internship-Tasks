import React from "react";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div
      style={{
        backgroundColor: "red",
        color: "white",
        fontSize: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      404 Page not Found
      <Link to="/">
        <button style={{ height: "30px", width: "200px" }}>
          Get back to Home Page
        </button>
      </Link>
    </div>
  );
}
