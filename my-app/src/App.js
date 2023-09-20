import React from "react";
import { GitHubUser } from "./GithubUser";
export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GitHubUser username="AntonioIannibelli31" />
      </div>
    );
  }
}
