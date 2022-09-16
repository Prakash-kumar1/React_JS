import React, {Component}from "react";

 export class Counter extends Component{
  constructor(){
    super () 
    this.state ={
       count :0,
       max:100,
       min:-10 , 
    }
  }

  increment =()=>{ 
    this.setState(this.state.count<this.state.max ?{count:this.state.count+1}:{count:this.state.count})
  }

  decrement =()=>{
    this.setState(this.state.count<=this.state.min ?{count:this.state.count}:{count:this.state.count-1})
  }

 render()
 {
  return(
    <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.increment}>Add</button>
      <button onClick={this.decrement}>Substract </button>
    </div>
  )
 }

}