import React from "react";
import { ClickCounter } from "./ClickTracker";
export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ClickCounter />
      </div>
    );
  }
}
