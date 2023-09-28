import React from "react";
import { Counter } from "./Counter";
import { Routes, Route } from "react-router-dom";
export class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Counter />} />
      </Routes>
    );
  }
}
