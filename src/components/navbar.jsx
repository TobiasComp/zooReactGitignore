import React, { Component } from "react";
import "./navbar.css";

class Navabr extends Component {
  state = {};
  render() {
    return (
      <ul className="nav-ul">
        <li onClick={() => this.props.onChangePanel("domestic")}>Domestic</li>
        <li onClick={() => this.props.onChangePanel("wild")}>Wild</li>
        <li onClick={() => this.props.onChangePanel("bird")}>Birds</li>
      </ul>
    );
  }
}

export default Navabr;
