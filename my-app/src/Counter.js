import React from "react";
export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState((state) => {
        return { count: state.count + this.props.incrementCount };
      });
    }, this.props.incrementBy);
  }
  render() {
    return <h1>Counter: {this.state.count}</h1>;
  }
}
