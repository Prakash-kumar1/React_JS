// Component is a  In-Built  class which have many methods

import React, {Component} from "react" ;

// if i extends this component then Main become a component . otherwise , Main is just a normal function .

export class Main extends Component{    
    constructor(props){
      super(props) ;
 // Intialize  the  state  here   
    }

    render(){
        return <h1>This is my Parent Component . </h1> ;
    }
}









