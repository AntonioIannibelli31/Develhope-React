import { useMemo } from "react";

export function FilteredList({ initialArr }) {
  function filter(initialArr) {
    let filtered = initialArr.filter((el) => el.age >= 18);
    let map = filtered.map((el) => (
      <li>
        {el.name},{el.age},{el.id}
      </li>
    ));
    return map;
  }
  const filteredList = useMemo(() => filter(initialArr), [initialArr]);

  return (
    <div>
      <ul>{filteredList}</ul>
    </div>
  );
}
