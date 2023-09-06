import React from "react";
export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>
          Se non passiamo la prop name stamperà solo Welcome, e si possono
          impostare dei valori predefiniti per la name prop
        </p>
        <p>Welcome {this.props.name}!</p>
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "Antonio",
};
