import React from "react";
import Person from './Components/Person';
import Person2 from './Components/Person2';


 export  class App extends React.Component{
  constructor(){
    super () 
    this.state ={
       count :0,
       count1:0,
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

  increase =()=>{ 
    this.setState(this.state.count1<this.state.max ?{count1:this.state.count1+1}:{count1:this.state.count1})
  }

  decrease =()=>{
    this.setState(this.state.count1<=this.state.min ?{count1:this.state.count1}:{count1:this.state.count1-1})
  }

 render()
 {
  return(
    <div>
      <h1 className="count">{this.state.count}</h1>
      <button onClick={this.increment}>Add</button>
      <button onClick={this.decrement}>Substract </button>

{
  this.state.count > 5 ? <Person count={this.state.count} name = "Prakash Kumar" /> : <Person2 count={this.state.count} name = "Govind Verma"/>
}

<h1 className="count1">{this.state.count1}</h1>
      {/* <button onClick={this.increase}>Plus</button> */}
      {/* <button onClick={this.decrease}>minus </button> */}

{
  this.state.count1 > 5 ? <Person  increase={this.increase} count1={this.state.count1} name = "Anjali Yadav" /> : <Person2 decrease={this.decrease} count1={this.state.count1} name = "Light Singh"/>
}

    </div>
  )
 }

}

