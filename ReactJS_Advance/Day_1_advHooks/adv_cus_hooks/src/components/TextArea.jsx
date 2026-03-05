import { useState, useRef, useEffect } from "react";

export default function TextEditor() {
  const [text, setText] = useState("");
  const [lastSaved, setLastSaved] = useState(null);

  const textAreaRef = useRef(null);
  const timerRef = useRef(null);
  const prevTextRef = useRef("");
  const charCountRef = useRef(0);
  console.log("rerendered");

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (textAreaRef.current.value) {
        localStorage.setItem("draft", textAreaRef.current.value);
        setLastSaved(new Date().toLocaleTimeString());
      }
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    prevTextRef.current = text;
    charCountRef.current = val.length;
    setText(val);
  };

  const handleFocus = () => {
    textAreaRef.current.focus();
  };

  const hasChanged = text !== prevTextRef.current;

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Advanced Text Editor</h2>
      <button
        onClick={handleFocus}
        className="border border-gray-400 px-1 rounded-sm"
      >
        Focus Editor
      </button>

      <textarea
        ref={textAreaRef}
        value={text}
        onChange={handleChange}
        style={{
          width: "100%",
          height: "100px",
          display: "block",
          margin: "10px 0",
        }}
      />

      <div style={{ fontSize: "0.8rem" }}>
        <p>Silent Char Count (Ref): {charCountRef.current}</p>
        {lastSaved && <span>Saved at: {lastSaved}</span>}
        {hasChanged && (
          <span style={{ color: "orange", marginLeft: "10px" }}>
            • Content changed
          </span>
        )}
      </div>
    </div>
  );
}
