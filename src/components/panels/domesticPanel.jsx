import React, { Component } from "react";
import DomesticCard from "../cards/domesticCard";
import { domestics } from "../../services/domesticService";

class DomesticPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domestics: domestics,
      activeDomesticIndex: this.props.activeDomesticIndex,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeDomesticIndex != this.props.activeDomesticIndex)
      this.setState({ activeDomesticIndex: this.props.activeDomesticIndex });
  }

  render() {
    return (
      <div>
        <div>Welcome to the Domestic Panel</div>
        <div className="flex">
          <div>
            <ul>
              {this.state.domestics.map((domestic) => (
                <li key={domestic.name}>{domestic.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <DomesticCard
              currentDomestic={this.state.domestics[this.props.activeDomesticIndex]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DomesticPanel;

