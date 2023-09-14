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
  handleResetInputs = () => {
    this.setState({
      username: "",
      password: "",
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          onChange={this.handleInputs}
          value={this.state.username}
        ></input>
        <input
          type="password"
          name="password"
          value={this.state.password}
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
        <button onClick={this.handleResetInputs}>Reset</button>
      </div>
    );
  }
}
