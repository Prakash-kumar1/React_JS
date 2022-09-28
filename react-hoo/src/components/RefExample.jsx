import React , {useState , useEffect} from "react";

export function RefExample() {
    const[name , setName]  =  useState("") ;
    const[count , setCount]  =  useState(0) ;


    useEffect(() => {
        setCount((prev) => prev + 1) ;
    } , [name])   //whenever name changing , i can do count+1


    return (
    <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <p>this is {name}</p>
        <p>rendered {count} times</p>
    </div>
    )
}










