import { useState } from "react";

export function Interview(){
    const [count , setCount] = useState(0) ;

    const Increment = () =>{
        setCount(count+1)
    }

    