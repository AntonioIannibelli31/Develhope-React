import React, { useContext } from "react";
import { DisplayContext } from "./DisplayContext";
let string = {
  it: {
    choice: "La lingua scelta è Italiano",
  },
  en: {
    choice: "The language chosen is English",
  },
};
export function DisplayLanguage() {
  const displayContext = useContext(DisplayContext);

  return <h1>{string[displayContext].choice}</h1>;
}
