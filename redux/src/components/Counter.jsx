import React from 'react'
import { useSelector } from 'react-redux' ;

const Counter = () => {

    // const counter = 1;
    // useSelector - it takes in the global state and 
    //                selects the counter state from it .

    const counter = useSelector((state) => {
        return state.counter
    })

  return (
    <main style={{"textAlign":"center"}}>
        <h1>{counter}</h1>

        <button style={{"margin":"20px"}}>Increment</button>
        <button style={{"margin":"20px"}}>Decrement</button>

    </main>
  ) ;
} ;

export default Counter ;


