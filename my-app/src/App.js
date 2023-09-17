import React from "react";
import { ToDoList } from "./ToDoList";
export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ToDoList
          render={(items, removeToDo) => {
            return (
              <div>
                <ul>
                  {items.map((todo, index) => (
                    <li key={index}>
                      {todo}
                      <button onClick={() => removeToDo(index)}>Remove</button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }}
        />
      </div>
    );
  }
}
