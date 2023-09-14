import React from "react";
export class ToDoList extends React.Component {
  state = {
    items: [
      "Finsh the project",
      "Do react exercises ",
      "do carreer and placement",
    ],
    newItems: "",
  };
  newToDo = (event) => {
    const name = event.target.name;
    const val = event.target.value;
    this.setState({
      [name]: val,
    });
  };
  pushToDo = () => {
    const items = this.state.items;
    const newItems = this.state.newItems;

    items.push(newItems);
    this.setState({
      items: this.state.items,
    });
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((todo, i) => (
            <li key={todo + i}>{todo}</li>
          ))}
        </ul>
        <input
          name="newItems"
          onChange={this.newToDo}
          value={this.state.newItems}
        ></input>
        <button onClick={this.pushToDo}>Add to do</button>
      </div>
    );
  }
}
