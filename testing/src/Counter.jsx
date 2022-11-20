import React, { useState } from 'react'

function Counter() {
    const [count , setCount] = useState(0) ;

    const Increment = () =>{
        setCount(count+1)
    }

    const Decrement = () =>{
        setCount(count-1)
    }

    const Reset = () =>{
        setCount(count == 0)
    }

  return (
    <div>
      <h1>count : {count}</h1>
    <button type='button' onClick={Increment}>+</button>    
    <button type='button' onClick={Decrement}>-</button>    
    <button type='button' onClick={Reset}>set</button>    
    </div>
  )
}

export default Counter