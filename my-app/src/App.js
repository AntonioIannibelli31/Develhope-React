import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
export class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/users"> ShowGithubUser </Link>
        <Routes>
          <Route path="/users" element={<ShowGithubUser />}>
            <Route index element={<p>Selezionare un utente</p>} />
          </Route>
        </Routes>
      </div>
    );
  }
}
