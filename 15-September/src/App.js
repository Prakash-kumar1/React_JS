import React from "react";
import './App.css';
import Person from './Components/Person';
import Person2 from './Components/Person2';
import Cards from "./Components/Cards";
import Slider from "./Components/Slider";
import { Parent } from "./Components/Parent";
import {InstaMain} from "./Components/InstaMain"
import Form from "./Components/Form";
import 'bootstrap/dist/css/bootstrap.min.css';


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
      <h1>{this.state.count}</h1>
      <button onClick={this.increment}>Add</button>
      <button onClick={this.decrement}>Substract </button>

{
  this.state.count > 5 ? <Person count={this.state.count} name = "Prakash Kumar" /> : <Person2 count={this.state.count} name = "Govind Verma"/>
}


{/* Passing  Function as Props */}
<h1>{this.state.count1}</h1>
      {/* <button onClick={this.increase}>Plus</button> */}
      {/* <button onClick={this.decrease}>minus </button> */}

{
  this.state.count1< 5 ? <Person  increase={this.increase} count1={this.state.count1} name = "Anjali Yadav" /> : <Person2 decrease={this.decrease} count1={this.state.count1} name = "Light Singh"/>
}

{/* Creating Instagram UI  */}
<InstaMain />

{/* Creating Card with the help of  React-bootstrap*/}
<Cards />    

{/* Creating Slider with the help of  React-bootstrap*/}
<Slider />    

{/* Stateless functional component*/}
<Parent text="Passing data in functional component"  name={['hema','prakash','govind']} />    


{/* Pure Component && Regular Component Importing  Inside Parent Component , Use this parent */}
<Parent />

{/* //@@@###$$$%%%   21-September Sessions (Watch again)  @@@###$$$%%% */}
<Form />

    </div>

  )
 }

}
