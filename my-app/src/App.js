import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
import { Counter } from "./Counter";
import { Input } from "./Input";
export class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/counter">counter</Link>
          </li>
          <li>
            <Link to="/AntonioIannibelli31">Username</Link>
          </li>
          <li>
            <Link to="input">Input</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/:name" element={<ShowGithubUser />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/input" element={<Input />} />
        </Routes>
      </div>
    );
  }
}
