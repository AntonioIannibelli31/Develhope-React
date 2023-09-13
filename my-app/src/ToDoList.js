import React from "react";
export class ToDoList extends React.Component {
  state = {
    items: [
      "Finsh the project",
      "Do react exercises ",
      "do carreer and placement",
    ],
  };
  addToDo = (event) => {};
  newTodo = (event) => {
    let val = event.target.value;
    this.setState((state) => {
      return {
        items: state.items + val,
      };
    });
  };
  render() {
    let arr = this.state.items;
    let mapArr = arr.map((todo) => <li>{todo}</li>);
    return (
      <div>
        <ul>{mapArr}</ul>
        <input type="text" onChange={this.newTodo}></input>
        <button onClick={this.addToDo}>Add to do</button>
      </div>
    );
  }
}
