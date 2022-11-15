import React, { useState } from "react";


export function Counter3() {
   
  return (
    <div>
        <h1>Counter-3</h1>
        <h1>{props.count}</h1>

        {props.handleIncrement && (
 <button onClick={props.handleIncrement}>increment</button>
        )}
       
        {props.handleDecrement && (
 <button onClick={props.handleDecrement}>decrement</button>
        )}
       
       
    </div>
  ) ;
}
