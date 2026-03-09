import React, { useState } from "react";
import NoRender from "./NoRender";

export default function Count() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>Count: {counter}</p>
      <button
        onClick={() => setCounter((prev) => prev + 1)}
        className="border rounded-lg bg-gray-700 text-white px-3 py1"
      >
        Increment
      </button>

      {/* As we have included the React.memo in the NoRender component it will no re render until he props changes */}
      <NoRender />
    </div>
  );
}
