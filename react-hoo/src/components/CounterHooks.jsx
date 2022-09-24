// @@@####^^&&&****   22-September Sessions   // @@@####^^&&&****

import React , { useState } from "react";
import { intialCount } from "../constants";

export function CounterHooks(){
    // const intialCount = 0 ;
// OR  we can also import

// I am calling useState  function with default value 0 
  const [count , setCount] = useState(intialCount) ;                 // 0 is default parameter
  const [name , setName] = useState("prakash k") ;                 


  const handleName = () => {
    if ( name !== "prakash"){       //name = paraksh then don,t  Capitalize
        setName(name.toLocaleUpperCase()) ;
    }
  }

  const handleIncrement = (step) => {
        setCount(count + step) ;
    } ;

    const incrementByTen = () => {
        for (let i = 0; i < 10; i++) {
          console.log(`i --> ${i}, count ---> ${count}`);       //see in console
          setCount((prevCount) => prevCount + 1);
        }
      };

return(
    <>

    <p>Count : {count}</p>
    <p>My name is {name}</p>

    <button onClick = { () => setCount(count + 1)} >Add</button>
{/* OR we can use Functions */}
    <button onClick = { () => handleIncrement(5)} >addBy5</button>
    <button onClick={incrementByTen}>increment by 10</button>

    <button onClick = { () => setCount(count - 1)} >Subtract</button>
    <button onClick = { () => setCount(intialCount)} >Reset</button>

    {/* <button onClick = { () => setName(name.toLocaleUpperCase())} >Capitalize</button> */}
{/* OR we can use Functions */}
    <button onClick = { handleName} >Capitalize</button>
    <button onClick = { () => setName(name.toLocaleLowerCase())} >SmallCase</button>

    </>
) ;

}














