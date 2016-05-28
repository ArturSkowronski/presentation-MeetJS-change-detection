import React, { Component } from "react";
import { Heading } from "spectacle";

export default class Interactive extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      color: "white"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1,
      color: "green"
    });
  }
  render() {
    const styles = {
      padding: 20,
      background: "#1B1919",
      minWidth: 300,
      marginTop: 20,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "2em"
    };

    const styles2 = {
      padding: 20,
      background: this.state.color,
      minWidth: 300,
      marginTop: 20,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "2em"
    };

    return (
      <div>
        <div>
          <div style={styles2}></div>
          <div style={styles2}></div>
          <div style={styles2}></div>

          <button style={styles} type="button" onClick={this.handleClick}>Click Me</button>
        </div>
      </div>
    );
  }
}
