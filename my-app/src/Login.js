import React from "react";
export class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };
  handleForm = (event) => {
    event.preventDefault();
    console.log(event.target.username.value.length);
    this.setState({
      [event.target.username.name]: event.target.username.value,
      [event.target.password.name]: event.target.password.value,
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
          disabled={
            this.state.username.length > 1 && this.state.password.length > 1
              ? false
              : true
          }
        >
          Login
        </button>
        <button type="reset">Reset</button>
      </form>
    );
  }
}
