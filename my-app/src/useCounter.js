import { useCallback, useState } from "react";
export function UseCounter({ initialVal = 0 }) {
  const [counter, setCounter] = useState(initialVal);

  const handleCounterReset = useCallback(
    function handleCounterReset() {
      setCounter(initialVal);
    },
    [initialVal]
  );

  const handleCounterIncrement = useCallback(function handleCounterIncrement() {
    setCounter((counter) => counter + 1);
  }, []);
  const handleCounterDecrease = useCallback(function handleCounterDecrease() {
    setCounter((counter) => counter - 1);
  }, []);
  return {
    counter: counter,
    reset: handleCounterReset,
    increment: handleCounterIncrement,
    decrease: handleCounterDecrease,
  };
}
