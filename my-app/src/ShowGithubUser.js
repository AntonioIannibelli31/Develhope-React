import { GitHubUser } from "./GithubUser";
import { useParams } from "react-router-dom";

export function ShowGithubUser() {
  const { name } = useParams();
  return (
    <div>
      <GitHubUser username={name} />
    </div>
  );
}
