import React from "react";
import { createRef } from "react";
export class Login extends React.Component {
  newRef = createRef();

  handleForm = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleForm} ref={this.newRef}>
        <input name="username"></input>
        <input name="password" type="password"></input>
        <button type="submit" onClick={this.props.onLogin}>
          Login
        </button>
        <button type="reset">Reset</button>
      </form>
    );
  }
}
