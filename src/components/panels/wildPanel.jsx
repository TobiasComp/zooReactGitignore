import React, { Component } from "react";
import WildCard from "../cards/wildCard";
import axios from "axios";

class WildPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wilds: [],
      activeWildIndex: this.props.activeWildIndex,
    };
  }

  componentDidMount() {
    this.getWilds()
      .then((data) => {
        let wilds = data.data;
        this.setState({ wilds: wilds });
        console.log("this is the data", data.data);
      })
      .catch((error) => {
        console.log("there was an error in the request");

        console.log(error);
      });
  }

  getWilds = async () => {
    return await axios({
      method: "GET",
      url:
        "https://raw.githubusercontent.com/TobiasComp/zoo/master/src/assets/wilds.json",
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.activeWildIndex != this.props.activeWildIndex)
      this.setState({ activeWildIndex: this.props.activeWildIndex });
  }

  renderWildPanel() {
    console.log("these are the wilds in the state", this.state.wilds);
    console.log(
      "this is the value of the activewildindex",
      this.props.activeWildIndex
    );

    if (this.state.wilds.length > 0) {
      console.log(
        "this is the info that were rendering with",
        this.state.wilds
      );

      return (
        <div>
          <div>
            <ul>
              {this.state.wilds.map((wild) => (
                <li key={wild.name}>{wild.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <WildCard
              currentWild={this.state.wilds[this.props.activeWildIndex]}
              // key={this.currentWild}
            />
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <div>Welcome to the Wild Panel</div>
        <div className="flex">{this.renderWildPanel()}</div>
      </div>
    );
  }
}

export default WildPanel;
