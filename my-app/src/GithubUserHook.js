import { useEffect, useState } from "react";

export function GitHubUserHook(username) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((username) => setUser(username))
      .catch((err) => {
        setError(err);
        setUserData(null);
      });
  }, [username]);
  return {
    user: user,
    err: err,
  };
}
