import { useState } from "react";

export function GitHubUserHook(username) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchGithubUser() {
    let url = `https://api.github.com/users/${username}`;

    try {
      let response = await fetch(url);
      let json = await response.json();
      setUserData(json);
    } catch (error) {
      setError(error);
      setUserData(null);
    }
  }
  return {
    userData: userData,
    error: error,
    fetchGithubUser: fetchGithubUser,
  };
}
