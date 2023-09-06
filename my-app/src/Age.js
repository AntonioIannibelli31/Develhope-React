import React from "react";
export class Age extends React.Component {
  render() {
    return (
      <div>
        {18 < this.props.age && this.props.age < 65 && (
          <p>Your age is {this.props.age}</p>
        )}
      </div>
    );
  }
}
