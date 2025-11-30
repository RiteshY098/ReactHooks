import React from "react";

function Child({ onclick: any }) {
  console.log("Child re-rendered");

  return (
    <button onClick={onclick}>
      Child Button
    </button>
  );
}

export default React.memo(Child);
