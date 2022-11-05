// we are using class based components
import React, {Component} from "react" ;
import  {Button} from "./components/Button" ;
import "./App.css" ;
import ControlComp from "./components/ControlComp";
import { UnControl } from "./components/UnControl";


export class App extends Component{    //extends taking property of parents , read in Inheritance
  constructor(props){
    super(props) ;
    this.state = {
      text : "Delete" ,
    };
  }

  handleBtnApp = () =>{
    this.setState((prev) => ({
      text : "submit ",
    })) ;
  }

  render(){
    // console.log(this) ;
    return(

     <div>
      <h1>Title : {this.props.name} and the blood of prince</h1>
      <p>Hello World , </p>
      <Button text={ this.state.text} handleBtnApp ={this.handleBtnApp} btnClass="delete" />

{/*Comment line no 8 to 13 and 23 then use line no. 25 , both are same . */}

      {/* <Button text="Delete" btnClass="delete" /> */}
        <Button text="Save" btnClass="save" />

        < ControlComp />

        <UnControl />
     </div>
     
    ); 
  }
}
// export default App  (using export above , so putting app in { } in index.js)

