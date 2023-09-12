import React from "react";
export class ClickCounter extends React.Component {
  state = {
    counter: 0,
  };
  eventCounter = () => {
    this.setState((state) => {
      return { counter: state.counter + 1 };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.eventCounter}>Increment</button>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}
