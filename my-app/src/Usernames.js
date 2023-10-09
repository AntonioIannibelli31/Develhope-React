import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Usernames() {
  return (
    <div>
      <h1>USERS</h1>
      <Outlet />
      <Link to={"/users/AntonioIannibelli31"}>USER Antonio</Link>
      <br />
    </div>
  );
}
