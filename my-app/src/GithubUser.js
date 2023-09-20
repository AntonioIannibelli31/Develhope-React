import React, { useState, useEffect } from "react";

export function gitHubUser({ username = "mojombo" }) {
  const [user, setUsername] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/${username}")
      .then((res) => res.json())
      .then((user) => setUsername(user))
      .catch((err) => console.error(err));
  }, [username]);
  return (
    <div>
      <h1>{user}</h1>
      <h2>{user.id}</h2>
    </div>
  );
}
