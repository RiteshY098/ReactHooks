import React, { useState, useMemo } from "react";

function App5() {
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);

  // Expensive calculation
  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {  // heavy loop
      total += number;
    }
    return total;
  }, [number]);  // runs only when 'number' changes

  return (
    <div>
      <h2>useMemo Example</h2>

      <p>Expensive Value: {expensiveValue}</p>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      <button onClick={() => setCounter(counter + 1)}>
        Re-render Counter: {counter}
      </button>
    </div>
  );
}

export default App5;
