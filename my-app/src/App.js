import React from "react";
import { Counter } from "./Counter";
export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter initialValue={0} incrementBy={1000} incrementCount={1} />
      </div>
    );
  }
}
