import React from "react";
import Person from './Components/Person';
import Person2 from './Components/Person2';


 export  class App extends React.Component{
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
      <h1 className="count">{this.state.count}</h1>
      <button onClick={this.increment}>Add</button>
      <button onClick={this.decrement}>Substract </button>

{
  this.state.count > 5 ? <Person count={this.state.count} name = "Prakash Kumar" /> : <Person2/>
}
    </div>
  )
 }

}

