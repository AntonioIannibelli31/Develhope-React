import { useState } from "react";
// import { GitHubUser } from "./GithubUser";
import { Link } from "react-router-dom";

export function GitHubUserList({
  arrayUsernames = ["Antonio", "Joele", "Vincenzo"],
}) {
  const [username, setUsername] = useState(arrayUsernames);

  function addUserName(event) {
    let input = event.target.parentElement.querySelector("input");
    let val = input.value;
    if (val) {
      let newArrayUsernames = [...username, val];
      setUsername(newArrayUsernames);
      input.value = "";
    }
  }

  return (
    <div>
      <Link to={"/AntonioIannibelli31"}>ShowGithubUser</Link>
      {/* <input name="username"></input>
      <button onClick={addUserName}>Add username</button> */}
    </div>
  );
}

let arr = [2, 3, 4];
console.log(arr.map((el) => el + 3));
