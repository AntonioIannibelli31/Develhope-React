import React from "react";
export class Login extends React.Component {
  handleForm = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleForm}>
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
