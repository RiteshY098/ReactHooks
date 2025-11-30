import React, { useRef, useState } from "react";

export default function RefHook() {
  const inputRef = useRef(null);
  const renderRef = useRef(0);
  const [text, setText] = useState("");

  renderRef.current++; // Track renders without causing re-render

  const focusInput = () => {
    inputRef.current.focus(); // Focus input using ref
  };

  return (
    <div>

      <input
        ref={inputRef}
        placeholder="Click button to focus me"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={focusInput}>Focus Input</button>

      <p>Component renders: {renderRef.current}</p>
      <p>You typed: {text}</p>

    </div>
  );
}
