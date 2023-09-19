import React, { useState } from "react";
export function ClickCounter() {
  const [counter, setCounter] = useState(0);
  function eventCounter() {
    setCounter((counter) => counter + 1);
  }

  return (
    <div>
      <button onClick={eventCounter}>Increment</button>
      <h1>{counter}</h1>
    </div>
  );
}
