import React, { useEffect, useState } from "react";
export function ClickCounter(updateCounterChange) {
  const [counter, setCounter] = useState(0);

  function eventCounter() {
    setCounter((counter) => counter + 1);
  }

  updateCounterChange = useEffect(() => {
    console.log(`Counter value : ${counter}`);
  }, [counter]);

  return (
    <div>
      <button onClick={eventCounter}>Increment</button>
      <h1>{counter}</h1>
    </div>
  );
}
