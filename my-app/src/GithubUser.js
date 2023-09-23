import React from "react";
import { GitHubUserHook } from "./GithubUserHook";
export function GitHubUser({ username }) {
  const { user } = GitHubUserHook(username);
  return (
    <div>
      {user && <h1>{user.login}</h1>}
      {user && <h2>{user.id}</h2>}
    </div>
  );
}
