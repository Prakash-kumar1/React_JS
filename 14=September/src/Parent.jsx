// Component is a  In-Built  class which have many methods

import React, {Component} from "react" ;
import { Child } from "./components/Child"

// if i extends this component then Parent become a component . otherwise , Main is just a normal function .

export class Parent extends Component{    
    constructor(props){
      super(props) ;
 // Intialize  the  state  here 
    this.state = {
        parentText : "Default Parent state" ,
    } ;
 }

   changeParentText = () => {
    this.setState({
        parentText : "CHANGED " ,
    }) ;
   } ;

    render(){
        return (
// In the place od div , we can use this <> and </> (internally it calls React.fragment)

            <>
        <h1>This is my Parent Component = {this.state.parentText} </h1>
        <button onClick={this.changeParentText}>Parent</button>
        <Child />
        </>
        ) ;
    }
}









