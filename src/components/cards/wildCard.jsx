import React, { Component } from "react";

class WildCard extends Component {
  constructor(props) {
    super(props);
    console.log(
      "this is the value of the current wild in the wild card",
      this.props.currentWild
    );

    this.state = {
      currentWild: this.props.currentWild,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentWild != this.props.currentWild)
      this.setState({ currentWild: this.props.currentWild });
  }

  render() {
    return (
      <div>
        <h3>{this.state.currentWild.name}</h3>
        <div>size: {this.state.currentWild.size}</div>
        <div>lifeSpan: {this.state.currentWild.lifeSpan}</div>
        <div>habitat: {this.state.currentWild.habitat}</div>
        <img src={this.state.currentWild.img} alt="" />
      </div>
    );
  }
}

export default WildCard;
