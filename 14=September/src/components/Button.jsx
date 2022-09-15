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
// // setState is a asynchronus process
//   this.setState(
//     {
// // whenEver , my Props or  state changes , my component will be Re-rendered (change Particular or Components data).
//       count : this.state.count + 1 ,
//     },
//     () => {
//       console.log(this.state.count)
//     }
//     );


//// ######@@@@@@@ OR comment ( Line no.-41  to  Line no.-50) it above and use this way :-   ######@@@@@@@


// it will increase 3 times( like 3 , 6, 9 , 12 , 15 etc ) because we written 3 times
  this.setState((prev) => ({
    count : prev.count + 1,
  })) ;

  this.setState((prev) => {
  return  {count : prev.count + 1};      //writting return or dirctly count(like Ist  and  Last) both are same .
  }) ;

  this.setState((prev) => ({
    count : prev.count + 1,
  })) ;


  };

  render() {

let {text, btnClass} = this.props ;  
// console.log(this.props) ;
console.log('child') ;

//(line no- 74 and line no- 80, line no 8 to 13 and 23 in App.js are in one )

// comment one of them then use

// let { btnClass} = this.props ;  (line no- 75 and line no- 81 and line no- 25 in App.js are in one )

    return (

      <div>
    <h1> {this.state.count} </h1>
    <button onClick={this.props.handleBtnApp}  className={btnClass}> {text} </button>
    {/* <button onClick={this.handleClick} style={{backgroundColor: "red"}} className={btnClass}> {this.state.text} </button> */}
    <button onClick={this.Increment} > Increment</button>
    </div>
    
    );

  }
}

// Line no.- 22 , In style we use 2 curly braces , Ist curly braces define this is a Property of style  and 
// IInd  curly braces define this is a Props