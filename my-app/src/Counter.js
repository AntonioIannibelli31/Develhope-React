import React from "react";
import { CounterDisplay } from "./CounterDisplay";
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
    return <CounterDisplay count={this.state.count} />;
  }
}
Counter.defaultProps = {
  initialValue: 0,
  incrementBy: 1000,
  incrementCount: 1,
};
