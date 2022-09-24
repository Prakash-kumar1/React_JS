// @@@####   Changes in the title by using Class Component in 22-September Sessions   ######

import React, { Component } from "react";

export class TitleChangeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }


  componentDidMount() {
    console.log("Did Mount") ;
    document.title = `${this.state.count} times clicked`;
  }


  componentDidUpdate() {
    console.log("Did Update") ;
    document.title = `${this.state.count} times clicked`;
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <button onClick={this.handleClick}>click - {this.state.count}</button>
    );
  }
}


