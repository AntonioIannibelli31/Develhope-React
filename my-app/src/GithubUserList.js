import { useState } from "react";
import { GitHubUser } from "./GithubUser";
export function GitHubUserList() {
  const [username, setUsername] = useState(arrayUsernames);
  function addUserName(event) {
    
    }
  }
  return (
    <div>
      <ul>
        {username.map((i) => (
          <GitHubUser key={i} />
        ))}
      </ul>
      <input type="text"></input>
      <button onClick={addUserName}>Add username</button>
    </div>
  );
}
