import React, { Component } from "react";
import Header from "./header";
import BirdPanel from "./birdPanel";
import WildPanel from "./wildPanel";
import DomesticPanel from "./domesticPanel";

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleChangePanel = this.handleChangePanel.bind(this);

    this.state = {
      activePanel: "bird",
      activeBirdIndex: 0,
    };
  }

  renderPanel() {
    switch (this.state.activePanel) {
      case "domestic":
        return <DomesticPanel />;
      case "wild":
        return <WildPanel />;
      case "bird":
        return (
          <BirdPanel
            activeBirdIndex={this.state.activeBird}
            birds={this.state.birds}
          />
        );
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

  render() {
    return (
      <div>
        <Header
          activePanel={this.state.activePanel}
          onChangePanel={this.handleChangePanel}
        />
        <div>{this.renderPanel()}</div>
      </div>
    );
  }
}

export default Main;
