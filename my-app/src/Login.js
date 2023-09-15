import React from "react";
export class Login extends React.Component {
  state = {
    disabled: true,
  };

  handleForm = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    this.setState({
      disabled: !username || !password,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleForm}>
        <input name="username" onChange={this.handleForm}></input>
        <input
          name="password"
          type="password"
          onChange={this.handleForm}
        ></input>
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
