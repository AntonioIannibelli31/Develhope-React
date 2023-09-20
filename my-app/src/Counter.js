import React, { useEffect, useState } from "react";
export function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 10000);
  }, []);

  useEffect(() => {});
  return <h1>Counter : {counter}</h1>;
}
