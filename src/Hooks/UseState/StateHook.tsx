import React, { useState } from "react";

export default function StateHook() {
  const [on, setOn] = useState(false);      // Toggle ON/OFF
  const [toggle, setToggle] = useState(false); // Input enable/disable toggle
  const [text, setText] = useState("");     // Input text state

  return (
    <div>
      {/* ON / OFF Toggle */}
      <button onClick={() => setOn(!on)}>
        {on ? "ON" : "OFF"}
      </button>

      <br /><br />

      {/* Enable / Disable Input */}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Disable Input" : "Enable Input"}
      </button>

      <br /><br />

      {/* Input Field with text change */}
      <input
        placeholder="Type something..."
        disabled={!toggle}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed: {text}</p>
    </div>
  );
}
