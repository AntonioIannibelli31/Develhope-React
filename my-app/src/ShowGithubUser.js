import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

export function ShowGithubUser({
  initialNames = ["AntonioIannibelli31", "Joele", "Vincenzo"],
}) {
  const [usernames, SetUsernames] = useState(initialNames);

  function handleAddName(event) {
    const input = event.target.parentElement.querySelector("[name='listName']");
    const value = input.value;

    if (value) {
      const newUsernames = [...usernames, value];
      SetUsernames(newUsernames);
      input.value = "";
    }
  }

  return (
    <div>
      <ul>
        {usernames.map((username, index) => (
          <li key={index}>
            <Link to={`/users/${username}`}>Users: {username}</Link>
          </li>
        ))}
      </ul>
      <input name="listName" type="text" />
      <button onClick={handleAddName}>Add name</button>
    </div>
  );
}
