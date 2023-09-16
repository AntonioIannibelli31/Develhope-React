import React from "react";
export class Login extends React.Component {
  handleForm = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log(!username, !password);
    this.setState({
      disabled:
        !this.usernameRef.current.value || !this.passwordRef.current.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleForm}>
        <input name="username"></input>
        <input name="password" type="password"></input>
        <button
          type="submit"
          onClick={this.props.onLogin}
          disabled={this.state.disabled}
        >
          Login
        </button>
        <button type="reset">Reset</button>
      </form>
    );
  }
}
