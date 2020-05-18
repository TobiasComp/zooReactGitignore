import React, { Component } from "react";
import BirdCard from "../cards/birdCard";
import { birds } from "../../services/birdService";

class BirdPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birds: birds,
      activeBirdIndex: this.props.activeBirdIndex,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeBirdIndex != this.props.activeBirdIndex)
      this.setState({ activeBirdIndex: this.props.activeBirdIndex });
  }

  render() {
    return (
      <div>
        <div>Welcome to the Bird Panel</div>
        <div className="flex">
          <div>
            <ul>
              {this.state.birds.map((bird) => (
                <li key={bird.name}>{bird.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <BirdCard
              currentBird={this.state.birds[this.props.activeBirdIndex]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BirdPanel;
