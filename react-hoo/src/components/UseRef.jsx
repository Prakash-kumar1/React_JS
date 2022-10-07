// Definition of useRef ==>>  when to need to manipulate DOM tree . sometimes we can't work with state and props
//                               " useRef " creates a mutable variable which will not re-Render the components .


import React , {useState, useRef, useEffect} from "react";

export function UseRef() {

    let inputRef = useRef(null)

    function handleInput() {
        console.log("function called") ;
// Applying  style  properties

        // inputRef.current.value = "1000" ;
        // inputRef.current.focus()  ;
        inputRef.current.style.color = "red" ;
        // inputRef.current.style.display = "none" ;
    }

const [name , setName] = useState("") ;
const [counter , setCounter] = useState(0) ;
const inputEl =  useRef("") ;
const previousCounterRef =  useRef("") ;
console.log(inputEl) ;


const resetInput = () => {
    setName("") ;
    inputEl.current.focus()  ;
    console.log(inputEl.current.value)
    inputEl.current.value = "Govind" ;
} ;

useEffect(() => {
    previousCounterRef.current = counter ;
}, [counter]) ;


    return (
        <div>
            <h1> use-Ref in React-JS  </h1>
            <input type="text"  ref={inputRef} />
            <button onClick={handleInput}>UseRef Click</button>
           
           <div>
            <h1>Random Counter : {counter}</h1>
            {typeof previousCounterRef.current !== "undefined" && (
            <h2>Previous Counter</h2>)}



           </div>
        </div>
    ) ;
}


