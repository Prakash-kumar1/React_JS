// .jsx  is  only  used  for  Class Based  Componenets  . never used for Function Based  Componenets
// .jsx gives facility like HTML 
// you can also use  js


import React, { Component } from "react";

export class Button extends Component {
  render() {
    return <button className={this.props.class}>{this.props.text}</button>;
  }
}