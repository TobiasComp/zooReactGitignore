import React, { Component } from "react";

class BirdCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBird: this.props.birds[this.props.birdIndex],
    };
  }

  render() {
    return (
      <div>
        <h3>{this.state.currentBird.name}</h3>
        <div>size: {this.state.currentBird.size}</div>
        <div>lifeSpan: {this.state.currentBird.lifeSpan}</div>
        <div>habitat: {this.state.currentBird.habitat}</div>
        <img src={this.state.currentBird.img} alt="" />
      </div>
    );
  }
}

export default BirdCard;
