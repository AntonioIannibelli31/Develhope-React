import React from "react";
export class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };
  handleInputs = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <input type="text" name="username" onChange={this.handleInputs}></input>
        <input
          type="password"
          name="password"
          onChange={this.handleInputs}
        ></input>
        <button
          disabled={
            this.state.username === "" || this.state.password === ""
              ? true
              : false
          }
          onClick={this.props.onLogin}
        >
          Login
        </button>
      </div>
    );
  }
}
