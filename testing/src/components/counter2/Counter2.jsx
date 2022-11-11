import React, { useState } from "react";


function Counter2() {
    const[count , setCount] = useState(0) ;
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => }>Add</button>
    </div>
  )
}

export default Counter2