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
   count : 0 ,
   } ;

// NowClick on Change into Submit it will become Double submit,but it is a lengthy process. so using Arrow Function
// beacuse for every function we can't write Bind
  // this.handleClick = this.handleClick.bind(this) ;
   }

   handleClick = () => {
    if(this.state.text === "submit"){
      this.setState({
        text : "Cancelled"
      });
console.log(this.state.text)
    }else{
      this.setState({
        text : "Double submit"
      });
console.log("Else part" , this.state.text)
    }
  } ;

  Increment = () => {
    this.setState({
      count : this.state.count += 1 ,
    });
console.log(this.state.count)
  };

  render() {

    return (
      <div>
    <h1> {this.state.count} </h1>
    {/* <button onClick={this.handleClick} style={{backgroundColor: "red"}} className={this.props.class}> {this.state.text} </button> */}
    <button onClick={this.Increment} > Increment</button>
    </div>
    );

  }
}

// Line no.- 22 , In style we use 2 curly braces , Ist curly braces define this is a Property of style  and 
// IInd  curly braces define this is a Props