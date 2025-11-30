import React, { useState, useEffect } from "react";

export default function EffectHook() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");

  // 1️⃣ Runs on every render
  useEffect(() => {
    console.log("This runs on every render!");
  });

  // 2️⃣ Runs only once when component mounts
  useEffect(() => {
    console.log("Component Mounted ✅");
  }, []);

  // 3️⃣ Runs when `count` changes
  useEffect(() => {
    console.log("Count Changed:", count);
  }, [count]);

  // 4️⃣ Runs when `toggle` changes
  useEffect(() => {
    console.log("Toggle State:", toggle);
  }, [toggle]);

  // 5️⃣ Cleanup effect (example: timer)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer running ⏳");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Cleanup Done 🧹 (Timer stopped)");
    };
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase Count {count}</button>
      <br /><br />

      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "ON" : "OFF"}
      </button>
      <br /><br />

      <input
        placeholder="Type text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}
