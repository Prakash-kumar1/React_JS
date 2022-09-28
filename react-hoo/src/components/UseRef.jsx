// Definition of useRef ==>>  when to need to manipulate DOM tree . sometimes we can't work with state and props


import React , {useState , useEffect ,useRef} from "react";

export function UseRef() {
    let inputRef = useRef(null)

    function handleInput() {
        console.log("function called") ;
        inputRef.current.value = "1000" ;
    }
    return (
        <div>
            <h1> use-Ref in React-JS  </h1>
            <input type="text"  ref={inputRef} />
            <button onClick={handleInput}>UseRef Click</button>
           
        </div>
    ) ;
}
