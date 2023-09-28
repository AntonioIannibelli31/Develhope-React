import React from "react";
import { Routes, Route } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Insert Username as a path</h1>
        <Routes>
          <Route path="/:name" element={<ShowGithubUser />} />
        </Routes>
      </div>
    );
  }
}
