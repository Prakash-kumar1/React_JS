
import React , {Component}from "react";

export class LifeCycle extends Component{
   constructor(props){
    super(props);
    this.state = {
        count : 1,
    };
   } 


   incrementCount = () =>{
    this.setState((prevState) => ({
        count : prevState.count + 1 ,
    })) ;
   }

   render(){
    return(
        <>
        <p>count = {this.state.count}</p>
        <button onClick={this.incrementCount}>increment</button>
        {this.state.count > 5 && <p>Hello Prakash </p>}
        </>
    ) ;
   }
}