import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
export class App extends React.Component {
  render() {
    return (
      <div>
        <Link to={"/users"}>Users:</Link>
        <Routes>
          <Route path="/users" element={<ShowGithubUser />} />
        </Routes>
      </div>
    );
  }
}
