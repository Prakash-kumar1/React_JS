// Component is a  In-Built  class which have many methods

import React, {Component} from "react" ;
import { Child } from "./Child"

// if i extends this component then Parent become a component . otherwise , Main is just a normal function .

export class Parent extends Component{    
    constructor(props){
      super(props) ;
 // Intialize  the  state  here 
    this.state = {
        parentText : "Default Parent state" ,
    } ;
 }

   changeParentText = () => {   //this is a  function which change parents property
    this.setState({
        parentText : "CHANGED " ,
    }) ;
   } ;

//    we can change parent data from child But we can't change  child data from Parent that's why 
//   React is called "  one way Binding ."

   changeByChild = () => {   
    this.setState({
        parentText : "Changing parent data by child" ,
    }) ;
   } ;

    render(){
        console.log("parent") ;  //if i changed my parent component (clicking on parent button)
// all my child will Re-rendered .(see in console)

        return (
// In the place od div , we can use this <> and </> (internally it calls React.fragment)

            <>
        <h1>This is my Parent Component = {this.state.parentText} </h1>
        <button onClick={this.changeParentText}>Parent</button>
        <Child />
{/* passing function itself and got into console */}
        <Child changeByChild={this.changeByChild}/>
        </>

        ) ;
    }
}









