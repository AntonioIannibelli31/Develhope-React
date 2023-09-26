import React from "react";
import { CarDetails } from "./CarDetails";
export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CarDetails
          initialData={{ model: "Panda", year: 2008, color: "Blue" }}
        />
      </div>
    );
  }
}
