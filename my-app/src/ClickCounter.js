import React, { useEffect, useState } from "react";
export function ClickCounter({ onCounterChange = () => {} }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    onCounterChange(counter);
  }, [counter, onCounterChange]);

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
