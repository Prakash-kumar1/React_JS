// we are using class based components
import React, {Component} from "react" ;
import  {Button} from "./components/Button" ;
import "./App.css" ;


export class App extends Component{    //extends taking property of parents , read in Inheritance
  constructor(props){
    super(props) ;
    this.state = {
      text : "Delete" ,
      count : 0 ,
    };
  }

  handleBtnApp = () =>{
    this.setState((prev) => ({
      text : "submit ",
    })) ;
  }

  render(){
    console.log("parent") ;      //App.js is my parent
    return(

     <div>

      <h1>Title : {this.props.name} and the blood of prince</h1>
      <p>Hello World , </p>

      <p>Parent count =  {this.state.count} </p>
    <button onClick={this.Increment} > Parent</button>  

        <Button text="Save" btnClass="save" />

        
     </div>
     
    ); 
  }
}
// export default App  (using export above , so putting app in { } in index.js)
