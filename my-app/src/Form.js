import { UseForm } from "./UsernameHook";
export function Form(initialVal = { username: "", password: "" }) {
  const { inputs, handleInputs } = UseForm(initialVal);
  return (
    <div>
      <input
        name="username"
        value={inputs.username}
        onChange={handleInputs}
      ></input>
      <input
        name="password"
        type="password"
        value={inputs.password}
        onChange={handleInputs}
      ></input>
    </div>
  );
}
