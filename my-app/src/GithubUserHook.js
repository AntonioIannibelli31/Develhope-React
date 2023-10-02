import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    username !== null && `https://api.github.com/users/${username}`,
    fetcher
  );
  function handleRefresh() {
    mutate();
  }
  return {
    data,
    error,
    handleRefresh,
  };
}
