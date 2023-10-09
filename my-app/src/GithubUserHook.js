import { useEffect, useState } from "react";

export function GitHubUserHook(username) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((username) => setUser(username))
      .catch((error) => {
        setError(error);
        setUser(null);
      });
  }, [username]);
  return {
    user: user,
    error: error,
  };
}
