import React from "react";
import { DisplayContext } from "./DisplayContext";
import { DisplayLanguage } from "./DisplayLanguage";
export class App extends React.Component {
  state = {
    language: "en",
  };
  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        <select
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <DisplayContext.Provider value={this.state.language}>
          <DisplayLanguage></DisplayLanguage>
        </DisplayContext.Provider>
      </div>
    );
  }
}
