import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
export class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/users"> ShowGithubUser </Link>
        <Link to="/"> Home</Link>
        <Routes>
          <Route path="/users" element={<ShowGithubUser />}>
            <Route index element={<p>Aggiungi un utente e selezionalo</p>} />
          </Route>
        </Routes>
      </div>
    );
  }
}
