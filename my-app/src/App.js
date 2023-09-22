import React from "react";
import { ClickCounter } from "./ClickCounter";

export function App() {
  return (
    <div className="App">
      <ClickCounter
        onCounterChange={(counter) => {
          console.log("The current value is", counter);
        }}
      />
    </div>
  );
}
