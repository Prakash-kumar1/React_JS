import React , {Component} from "react" ;

export class Toggle extends Component{

// state ==>>  store some data inside a variable

       constructor(props){
        super(props) ;
    // state values are changable 
    this.state = {
        isToggleOn : false ,
    } ;
       }

       handleClick(){
        console.log(this);
        this.state.isToggleOn = true ;
       }

    render(){
        return {
         <button onclick = {this.handleClick}>
            {this.state.isToggleOn ? "ON" : "OFF"}
            </button>
        } ;
    }
}

