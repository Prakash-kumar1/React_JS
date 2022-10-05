// ######### =>  04-October Session   ######### =>


import React , {useState} from "react";

export function CounterOne() {
    const [count , setCount] = useState(0) ;

    const increment = () => {
        setCount((prev) => prev + 1) ;
    } ;

    const decrement = () => {
        setCount((prev) => prev - 1) ;
    } ;
    const reset = () => {
        setCount(0) ;
    } ;

return(
    <>
    <h2>count - {count}</h2>
    <button onClick = { increment} >add</button>
    <button onClick = { decrement} >Subtract</button>
    <button onClick = { reset} >Reset</button>
    </>
)
}








