import React from "react";
import { FilteredList } from "./FilteredList";
export function App() {
  return (
    <div className="App">
      <FilteredList
        initialArr={[
          { name: "Antonio", id: 1, age: 22 },
          { name: "Alessandro", id: 2, age: 25 },
          { name: "Vincenzo", id: 3, age: 28 },
          { name: "Pippo", id: 0, age: 16 },
        ]}
      />
    </div>
  );
}
