import React, { useState } from "react";

export default function Button({ Name }) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(""); // New state for form testing

  return (
    <div>
      <h2>
        {Name} : {count}
      </h2>
      <p>Typed: {text}</p>

      <input
        type="text"
        placeholder="Enter something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>Increase Counter</button>
    </div>
  );
}
