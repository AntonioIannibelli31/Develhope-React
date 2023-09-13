import React from "react";
import { Login } from "./Login";
export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Login
          onLogin={() => {
            console.log("username and password are correct");
          }}
        />
      </div>
    );
  }
}
