import React, { Component } from "react";

class DomesticCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDomestic: this.props.currentDomestic,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentDomestic != this.props.currentDomestic)
      this.setState({ currentDomestic: this.props.currentDomestic });
  }

  render() {
    return (
      <div>
        <h3>{this.state.currentDomestic.name}</h3>
        <div>size: {this.state.currentDomestic.size}</div>
        <div>lifeSpan: {this.state.currentDomestic.lifeSpan}</div>
        <div>habitat: {this.state.currentDomestic.habitat}</div>
        <img src={this.state.currentDomestic.img} alt="" />
      </div>
    );
  }
}

export default DomesticCard;
