import React, { Component } from "react";

class Paginator extends Component {
  state = {};
  render() {
    return (
      <div className="flex">
        <div onClick={()=>this.props.onIndexChange(-1)}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ371gz6_a8DhyDICFTFYY53W7rjjcr0Z0vpk9uHn-vJHy4WBmZcA&s" />
        </div>
        <div onClick={()=>this.props.onIndexChange(1)}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnoYWeF7b3vFkDFMKq98SvncogP7hS_iuBKsyJD3toVv9AG730&s" />
        </div>
      </div>
    );
  }
}

export default Paginator;
