import React, { useState, useCallback } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []); // function is memoized and stays same between renders

  return (
    <div>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default Parent;
