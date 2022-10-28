import { useState } from "react";

export function Interview(){
    const [count , setCount] = useState(0) ;

    const Increment = () =>{
        setCount(count+1)
    }

    return(
        <>
        <h1>Count - {count}</h1>
        <button onClick={Increment}>Add</button>
        </>
    )
}


function sum(num1,num2){
    return Math.random( num1+num2)
}