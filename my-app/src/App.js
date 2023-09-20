import React from "react";
import { GitHubUserList } from "./GithubUserList";
export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GitHubUserList
          arrayUsernames={["AntonioIannibelli31", "Alessandro-Ambra-dev"]}
        />
      </div>
    );
  }
}
