// ###########    27 - September sessions =>>  useRef (it returns a Object)########### 


import React , {useState , useEffect ,useRef} from "react";


export function RefExample() {
    const[name , setName]  =  useState("") ;
    // const[count , setCount]  =  useState(0) ;     //Or we can use
    const countObj = useRef(1) ;   //whatever i am passing as argument it becomes current data , see in console


    // useEffect(() => {
    //     setCount((prev) => prev + 1) ;        
    // } , [name])   //whenever name changing , i can do count+1


// In useRef , we don't change any state , it means whenever useRef changes my component will not be  Re-render .
// so, there is no need to use [name] ..
    useEffect(() => {
        // console.log(countObj) ;
        countObj.current = countObj.current + 1 ;
        console.log(countObj.current) ;
    })




    return (
    <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <p>this is {name}</p>
        {/* <p>rendered use-state method {count} times</p>    */}
        <p>rendered use - ref method {countObj.current} times</p>   
    </div>
    )
}










