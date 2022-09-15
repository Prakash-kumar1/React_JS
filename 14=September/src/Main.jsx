// Component is a  In-Built  class which have many methods

import React, {Component} from "react" ;
import { Child } from "./components/Child"

// if i extends this component then Main become a component . otherwise , Main is just a normal function .

export class Main extends Component{    
    constructor(props){
      super(props) ;
 // Intialize  the  state  here   
    }

    render(){
        return (
            <div>
        <h1>This is my Parent Component . </h1>
        <Child />
        </div>
        ) ;
    }
}









