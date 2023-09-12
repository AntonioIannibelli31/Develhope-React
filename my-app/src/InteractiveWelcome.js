import React from "react";
import { Welcome } from "./Welcome";
export class InteractiveWelcome extends React.Component {
  state = {
    name: "",
  };
  handleName = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleName}></input>
        <Welcome name={this.state.name} />
      </div>
    );
  }
}
