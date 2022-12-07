
import { useState } from "react";


export const Counter = () => {
const [count, setCount] = useState(0)
  return (
    <div>
    <button onClick={() => {setCount(count + 1)}}> + </button>
    <h1>Count: {count}</h1>
    <button onClick={() => {setCount(count - 1)}}> - </button>
    </div>
  )
}