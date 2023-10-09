import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
import { Usernames } from "./Usernames";
export class App extends React.Component {
  render() {
    return (
      <div>
        <Link to={"/users"}>Users:</Link>
        <Routes>
          <Route path="/users" element={<Usernames />}>
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>
        </Routes>
      </div>
    );
  }
}
