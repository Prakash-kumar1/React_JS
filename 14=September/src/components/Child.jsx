import React, { Component } from "react" ;


export class Child extends Component{
    constructor(props){
        super(props) ;
//  Intialize  the  state  here 
    this.state = {
        childText : "Default child state" ,
    } ;
    }

    render(){
        return (
            <>
        <h2>This is my Child Component .= {this.state.childText}</h2>
        <button>Child</button>
        <p>There are 2 different states . one is Parent state and another is Child state .</p>
        </>
        )

    }

    
}
















