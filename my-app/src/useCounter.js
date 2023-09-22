import { useState } from "react";
export function UseCounter({ initialVal = 0 }) {
  const [counter, setCounter] = useState(initialVal);
  function handleCounterReset() {
    setCounter(initialVal);
  }
  function handleCounterIncrement() {
    setCounter((counter) => counter + 1);
  }
  function handleCounterDecrease() {
    setCounter((counter) => counter - 1);
  }
  return {
    counter: counter,
    reset: handleCounterReset,
    increment: handleCounterIncrement,
    decrease: handleCounterDecrease,
  };
}
