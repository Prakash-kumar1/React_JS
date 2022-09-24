// @@@####^^&&&****   21-September Sessions   // @@@####^^&&&****

// Hooks Definition =>>  Hooks  are  functions that let you "Hook into" means Attached  React state  and life-cycle features from 
//                        Function components.  hooks  allows  you to use  React  without classes . it means you
//                     can  use state  and other  React features  without  writting  a class . React provides a 
//                     few  built-in  Hooks like  useState ,  useEffect  etc . Hooks are new addition in React 16.8 . 


// when use Hooks ==>>  If you write a function component and realize you need to add some state to it . then use hooks .


// Rules of  Hooks ==>> There are foolwing rules to use Hooks 

// (1) =>   Only call  Hooks  at the top level - We should not call hooks inside loops , Conditions or  Nested
//           Functions . Instead always use hooks at the top level of your React Functions .
 
// (2) =>   Only call Hooks  from React Functions - We should not call hooks from regular Javascript Functions . 
// Instead call hooks from  React Function components  OR  call hooks from  Custom Hooks .
 
// (3) =>  React  relies  on the order  in which  Hooks  are  called .

// (4) =>  Hooks don't work inside the classes .


// @@@###$***  Creating an Increment value Using  Class Component and  Hooks    @@@###$*** 


// import React, { Component } from "react";

// export class Define extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       name: "",
//     };
//   }

//   handleIncrement = (stepValue) => {
//     this.setState({ count: this.state.count + stepValue });
//   };

//   render() {
//     return (
//       <>
//         <p>count - {this.state.count}</p>
//         <button onClick={() => this.handleIncrement(3)}>increment</button>
//       </>
//     );
//   }
// }



// In class component we use state  but in  Hooks we use "  useState  "

import React, { useState } from "react";

export function Define() {
  const initialCount = 0;
  const [count, setCount] = useState(0); //   [value, method which updates the value]
  return (
    <>
      <p>count - {count}</p>
      <button onClick={() => setCount(count + 5)}>increment</button>
    </>
  );
}


