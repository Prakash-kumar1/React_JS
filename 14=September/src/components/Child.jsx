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
        console.log("child") ;
        return (
            <>
        <h2>This is my Child Component .= {this.state.childText}</h2>
        <button onClick={this.childTextChange}>Child</button>
        <p>There are 2 different states . one is Parent state and another is Child state .</p>
        </>
        )

    }

    
}
















