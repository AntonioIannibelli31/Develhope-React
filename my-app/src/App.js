import React from "react";
import { Routes, Route } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
import { Counter } from "./Counter";
import { Input } from "./Input";
import { PageNotFound } from "./PageNotFound";
export class App extends React.Component {
  render() {
    return (
      <div>
        {/* <ul>
          <li>
            <Link to="/counter">counter</Link>
          </li>
          <li>
            <Link to="/AntonioIannibelli31">Username</Link>
          </li>
          <li>
            <Link to="input">Input</Link>
          </li>
        </ul> */}
        <Routes>
          <Route path="/name" element={<ShowGithubUser />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/input" element={<Input />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    );
  }
}
