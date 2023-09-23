import { useEffect, useState } from "react";

export function GitHubUserHook(username) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((username) => setUser(username))
      .catch((err) => console.error(err));
  }, [username]);
  return {
    user: user,
  };
}
