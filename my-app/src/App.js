import React from "react";
import { Welcome } from "./Welcome";
export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Welcome name="John" age="30" />
      </div>
    );
  }
}
