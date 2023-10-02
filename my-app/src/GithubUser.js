import { useGithubUser } from "./GithubUserHook";

export function GithubUser(username) {
  const { data, error } = useGithubUser((username = "AntonioIannibelli31"));

  return (
    <div>
      {error && <h3>An error has occured</h3>}
      {data && (
        <div>
          <h1> {data.login}</h1>
          <h1>{data.id}</h1>
        </div>
      )}
    </div>
  );
}
