// ######### ===>   useState()  <===##########

// Definition =>>  useState is a hook that allows you to add React state to function components. we call it inside
//                 a function component to add some local state to it . 
// useState returns a pair - the current state value and a function that let's you update it. React will preserve 
// this state between re-Renders . you can call this function from an  event-Handler  or  somewhere else .

// Example ==>>  import React , { useState } from react ;

// when we declare a state variable with useState , it returns a pair - an array with two items . so, by writting
// Square Bracket  we are doing  Array Destructuring .

 //              const [name , setName] = useState("Rahul") ;      //Declaring state variable
 //              const [roll , setRoll] = useState(189) ;      
 //              const [subject , setSubject] = useState( { sub : "Math"} ) ;     

// The First item name is the " Current value " .
// The Second item  setName is a function that let us update it .


// <<===>> NOTE <<===>>  You can call useState as many times as you want .

// <<===>> Accessing State <<===>> In a Function , You can use  State Variable Directly . 
// example :  <h1> Your name is {name} </h1>

// <<===>> Updating State ==>>   example : setName(" Geeky shows ")


import React , { useState } from "react" ;

export function UseState() {
    const [count , setCount] = useState(0)
    const [name , setName] = useState("light") ;
    const [roll , setRoll] = useState(123) ;
    const [quote , setQuote] = useState("i am the best") ;

    const handleClick = () => {
        setName("Prakash Kumar") ;
        setRoll("GDC00675") ;
        setQuote("I am deserving a life full of Luxury.") ;
    };


    const handleIncrement = () =>{
        setCount(count + 1) ;
    }

    return(
        <div>
            <h2>Name : {name}</h2>
            <h2>Roll No. : {roll}</h2>
            <h2>Quote : {quote}</h2>
            <h2>Count Up : {count}</h2>
            <button type="button" onClick={handleClick}>Change</button>
            <button type="button" onClick={handleIncrement}>Add</button>
        </div>
    ) ;
}



























