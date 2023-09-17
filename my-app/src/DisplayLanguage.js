import React from "react";
import { DisplayContext } from "./DisplayContext";
let string = {
  it: {
    choice: "La lingua scelta è Italiano",
  },
  en: {
    choice: "The language chosen is English",
  },
};
export class DisplayLanguage extends React.Component {
  render() {
    return (
      <DisplayContext.Consumer>
        {(language) => {
          return <h1>{string[language].choice}</h1>;
        }}
      </DisplayContext.Consumer>
    );
  }
}
