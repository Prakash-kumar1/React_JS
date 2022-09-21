// // @@@###$$$%%%***  Starting  20-September sessions  @@@###$$$%%%***


// import React, { Component } from 'react'
// export class Parent extends Component {
//   render() {
//     return (
//       <>
//       <h1>Header = 1 with {this.props.text}</h1>  
//       <p> Paragraph</p>
//        <p> My name is {this.props.name[2]}</p>
//       <h2>Header = 2</h2>  
//       </>
      
//     )
//   }
// }


// // In above , I am not writting any state . so, we can use function.
// // This is called Stateless Functional Component

// export function Parent(props) {

//       return (
//         <>
//         <h1> Without state {props.text}</h1>  
//         <p> I am using Function with the name is {props.name[1]}</p>
//         <p> My name is {props.name[2]}</p>
//         <h2>Stateless Functional Component</h2>  
//         </>
        
//       );
//     }



// ##### (Pure Component && Regular Component) Using in Parent.jsx ####

import React, { Component } from 'react'
import Regular from './Regular';
import { Pure } from './Pure';

export class Parent extends Component {
  constructor(props){
    super(props) ;
    this.state = {
      name : "amit" ,
    } ;
  }

  render() {
    console.log("----> Parent Component <----")

    return (
      <>

       <p>Inside Parent Component Importing</p>
       <Regular name = {this.state.name}/>
       <Pure   name = {this.state.name}/>
       <button onClick={ () => this.setState({ name : "Prakash"})}> Change Name</button>
       <button onClick={ () => this.setState({ name : "anjali"})}> Change Name</button>

{/* forceUpdate() ==> Forcefully render data on my page even though my State and Props are not changes */}
  {/* It is in-Built method . Try to never used forceUpdate()  */}
      <button onClick={ () => this.forceUpdate() }>force Update</button>

        </>
    )
  }
}




