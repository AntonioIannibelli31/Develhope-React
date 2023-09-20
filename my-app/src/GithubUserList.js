import { useState } from "react";
export function GitHubUserList(arrayUsernames) {
  const [username, setUsername] = useState(arrayUsernames);
  function addUserName() {}
  return <div>
    <ul>
        {username.map((username)=>(<GitHubUser/>)}
    </ul>
  </div>;
}
