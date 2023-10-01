import React, { useState, useEffect } from "react";

export function GitHubUser({ username }) {
  const [user, setUsername] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((username) => setUsername(username))
      .catch((err) => console.error(err));
  }, [username]);
  return (
    <div>
      <h1>Welcome</h1>
      {user && <h1>{user.login}</h1>}
      <h1>Your id is:</h1>
      {user && <h2>{user.id}</h2>}
    </div>
  );
}
