import { useState } from "react";
export function UseForm(initialVal = { username: "", password: "" }) {
  const [inputs, setInputs] = useState(initialVal);

  function handleInputs(event) {
    setInputs((inputs) => {
      return {
        ...inputs,
        [event.target.name]: event.target.value,
      };
    });
    console.log(inputs);
  }
  return {
    inputs: inputs,
    handleInputs: handleInputs,
  };
}
