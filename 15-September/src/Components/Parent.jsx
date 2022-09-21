// @@@###$$$%%%***  Starting  20-September sessions  @@@###$$$%%%***


// import React, { Component } from 'react'
// export class Parent extends Component {
//   render() {
//     return (
//       <>
//       <h1>Header = 1</h1>  
//       <p> Paragraph</p>
//       <h2>Header = 2</h2>  
//       </>
      
//     )
//   }
// }


// In above , I am not writting any state . so, we can use function.
// This is called Stateless Functional Component

export function Parent(props) {

      return (
        <>
        <h1> Without state {props.text}</h1>  
        <p> I am using Function with the name is {props.name[1]}</p>
        <p> My name is {props.name[2]}</p>
        <h2>Stateless Functional Component</h2>  
        </>
        
      );
    }
