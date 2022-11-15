import React, { useState } from "react";


export function Counter3(props) {
   
  return (
    <div>
        <h1>Counter-3</h1>
        <h2>{props.count}</h2>

        {props.handleIncrement && (
 <button onClick={props.handleIncrement}>increment</button>
        )}
       
        {props.handleDecrement && (
 <button onClick={props.handleDecrement}>decrement</button>
        )}
       
       
    </div>
  ) ;
}
