// we are using class based components

import React, {Component} from "react" ;

export class App extends Component{    //extends taking property of parents , read in Inheritance
  render(){
    console.log(this) ;
    return(
     <div>
      <h1>Title : {this.props.name} and the blood of prince</h1>
      <p>Hello World , </p>
     </div>
    ); 
  }
}

// export default App  (using export above , so putting app in { } in index.js)
