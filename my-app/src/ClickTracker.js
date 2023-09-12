import React from "react";
export class ClickCounter extends React.Component {
  state = {
    lastBtn: "",
  };
  handleLastBtn = (event) => {
    this.setState((state) => {
      return {
        lastBtn: (state.lastBtn = event.target.name),
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleLastBtn} name="Bottone1">
          Button 1
        </button>
        <button onClick={this.handleLastBtn} name="Bottone2">
          Button 2
        </button>
        <button onClick={this.handleLastBtn} name="Bottone3">
          Button 3
        </button>
        <h1>{this.state.lastBtn}</h1>
      </div>
    );
  }
}
