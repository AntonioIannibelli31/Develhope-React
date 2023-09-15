import React from "react";
export class Login extends React.Component {
  handleForm = (event) => {
    event.preventDefault();
  };
  componentDidMount() {
    this.username.focus();
  }
  render() {
    return (
      <form onSubmit={this.handleForm}>
        <input
          name="username"
          ref={(input) => {
            this.username = input;
          }}
        ></input>
        <input name="password" type="password"></input>
        <button type="submit" onClick={this.props.onLogin}>
          Login
        </button>
        <button type="reset">Reset</button>
      </form>
    );
  }
}
