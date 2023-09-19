import React, { useState } from "react";
export function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    remember: false,
  });
  function handleInputs(event) {
    const { name, value, checked, type } = event.target;
    setLogin((login) => {
      return {
        ...login,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  return (
    <div>
      <input
        value={login.username}
        type="text"
        name="username"
        onChange={handleInputs}
      ></input>

      <input
        value={login.password}
        type="password"
        name="password"
        onChange={handleInputs}
      ></input>
      <input
        value={login.remember}
        type="checkbox"
        name="remember"
        onChange={handleInputs}
      ></input>
      <button
        disabled={
          login.username === "" ||
          login.password === "" ||
          login.remember === false
            ? true
            : false
        }
      >
        Login
      </button>
    </div>
  );
}
