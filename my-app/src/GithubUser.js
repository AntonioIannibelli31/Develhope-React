import React from "react";
import { GitHubUserHook } from "./GithubUserHook";
export function GitHubUser({ username }) {
  const { userData, error, fetchGithubUser } = GitHubUserHook(username);
  return (
    !error && (
      <div>
        <button onClick={fetchGithubUser}>Fetch </button>
        <h1>{userData.login}</h1>
        <h2>{userData.id}</h2>
      </div>
    )
  );
}
