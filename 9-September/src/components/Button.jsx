// .jsx  is  only  used  for  Class Based  Componenets  . never used for Function Based  Componenets
// .jsx gives facility like HTML 
// you can also use  js


import React, { Component } from "react";

export class Button extends Component {

// State :=>  whatever the value you are providing is inside the Constructor

   constructor(props){    //By Default Props are passed in constructor only
    super(props) ;
// Now you can change the properties like text
   this.state = {
// I am changing save and delete text
   text : "Change into Submit" ,
   } ;

// Now , when we Click on
  this.handleClick = this.handleClick.bind(this) ;
   }

   handleClick(){
    if(this.state.text === "submit"){
      this.setState({
        text : "Cancelled"
      });
    }else{
      this.setState({
        text : "Double submit"
      });
    }
  }

  render() {

    return (
    <button onClick={this.handleClick} style={{backgroundColor: "red"}} className={this.props.class}> {this.state.text} </button>
    );

  }
}

// Line no.- 22 , In style we use 2 curly braces , Ist curly braces define this is a Property of style  and 
// IInd  curly braces define this is a Props