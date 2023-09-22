import { UseCounter } from "./useCounter";
export function Counter(initialVal = 0) {
  const { counter, increment, reset, decrease } = UseCounter(initialVal);
  return (
    <div>
      <h1> The counter is :{counter}</h1>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}
