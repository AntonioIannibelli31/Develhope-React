import React from "react";
import { CounterDisplay } from "./CounterDisplay";
export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return { count: state.count + this.props.incrementCount };
      });
    }, this.props.incrementBy);
  }
  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
        <p>Il constructor non serve con il metodo componentDidMount</p>
      </div>
    );
  }
}

Counter.defaultProps = {
  initialValue: 0,
  incrementBy: 1000,
  incrementCount: 1,
};
