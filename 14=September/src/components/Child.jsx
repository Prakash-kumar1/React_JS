import React, { Component } from "react" ;


export class Child extends Component{
    constructor(props){
        super(props) ;
//  Intialize  the  state  here 
    this.state = {
        childText : "Default child state" ,
    } ;
    }

    childTextChange = () =>{
      this.setState({
        childText : "child changed" ,
      })  ;
    };

    render(){
        console.log("child") ;  //if i change my Parent component , all my child also re-render
        console.log("child props" , this.props) ;   //getting parent data through props
        return (
            <>
        <h2>This is my Child Component .= {this.state.childText}</h2>
        <button onClick={this.childTextChange}>Child</button>
        <p>There are 2 different states . one is Parent state and another is Child state .</p>

{/*Calling Parent function in child =>> we can change parent data from child But we can't change  child data
 from Parent that's why  React is called  " one way Binding ". */}

        <button onClick={this.props.changeByChild}>change parent from child .</button>

{/* passing object is not working , see it later */}
        {/* <p>Hi my name is {this.props.lightObj.name}  {this.props.lightObj.food}</p> */}
        </>
        )
    
}
    
}
















