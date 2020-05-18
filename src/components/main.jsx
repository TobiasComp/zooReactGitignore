import React, { Component } from "react";
import Header from "./header";
import BirdPanel from "./panels/birdPanel";
import WildPanel from "./panels/wildPanel";
import DomesticPanel from "./panels/domesticPanel";
import Paginator from "./paginator";

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleChangePanel = this.handleChangePanel.bind(this);
    this.handleIndexChange = this.handleIndexChange.bind(this);
    this.state = {
      activePanel: "bird",
      activeBirdIndex: 0,
      activeDomesticIndex: 0,
      activeWildIndex: 0,
    };
  }

  renderPanel() {
    switch (this.state.activePanel) {
      case "domestic":
        return (
          <DomesticPanel activeDomesticIndex={this.state.activeDomesticIndex} />
        );
      case "wild":
        return <WildPanel activeWildIndex={this.state.activeWildIndex} />;
      case "bird":
        return <BirdPanel activeBirdIndex={this.state.activeBirdIndex} />;
    }
  }

  handleChangePanel(newPanel) {
    // console.log("This is the newPanel", newPanel);

    let np = "";
    switch (newPanel) {
      case "domestic":
        np = "domestic";
        break;
      case "wild":
        np = "wild";
        break;
      case "bird":
        np = "bird";
    }
    // console.log("This is the value of np", np);

    this.setState({ activePanel: np });
  }

  handleIndexChange = (direction) => {
    let newIndex;
    switch (this.state.activePanel) {
      case "bird":
        newIndex = this.state.activeBirdIndex;
        if (this.state.activeBirdIndex == 0 && direction == -1) {
          newIndex = 4;
        } else {
          newIndex = (direction + newIndex) % 5;
        }
        this.setState({ activeBirdIndex: newIndex });
        break;
      case "wild":
        newIndex = this.state.activeWildIndex;
        if (this.state.activeWildIndex == 0 && direction == -1) {
          newIndex = 4;
        } else {
          newIndex = (direction + newIndex) % 5;
        }
        this.setState({ activeWildIndex: newIndex });
        break;
      case "domestic":
        newIndex = this.state.activeDomesticIndex;
        if (this.state.activeDomesticIndex == 0 && direction == -1) {
          newIndex = 4;
        } else {
          newIndex = (direction + newIndex) % 5;
        }
        this.setState({ activeDomesticIndex: newIndex });
        break;
    }
  };

  render() {
    return (
      <div>
        <div>
          <Header
            activePanel={this.state.activePanel}
            onChangePanel={this.handleChangePanel}
          />
          <div>{this.renderPanel()}</div>
          {/* <BirdPanel activeBirdIndex={this.state.activeBirdIndex} /> */}
        </div>
        <Paginator onIndexChange={this.handleIndexChange} />
      </div>
    );
  }
}

export default Main;
