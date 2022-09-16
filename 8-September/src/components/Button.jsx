// .jsx  is  only  used  for  Class Based  Componenets  . never used for Function Based  Componenets
// .jsx gives facility like HTML (self closed tag , attributes),  you can also use  js . 

// Class Component :=>  When a component start from class keyword is known as Class Component . we are using
//                 " state " only inside the Class Component . that's why it is also known as "Stateful Component"
//                 For showing the data we used Class Component  and for modifying the data we used Functional Component  

import React, { Component } from "react";

export class Button extends Component {
  render() {
    return <button className={this.props.class}>{this.props.text}</button>;
  }
}