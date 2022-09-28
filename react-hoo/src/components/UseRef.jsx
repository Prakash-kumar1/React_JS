// Definition of useRef ==>>  when to need to manipulate DOM tree . sometimes we can't work with state and props


import React , {useRef} from "react";

export function UseRef() {

    let inputRef = useRef(null)


    function handleInput() {
        console.log("function called") ;
// Applying  style  properties

        // inputRef.current.value = "1000" ;
        // inputRef.current.focus()  ;
        // inputRef.current.style.color = "red" ;
        inputRef.current.style.display = "none" ;


    }



    return (
        <div>
            <h1> use-Ref in React-JS  </h1>
            <input type="text"  ref={inputRef} />
            <button onClick={handleInput}>UseRef Click</button>
           
        </div>
    ) ;
}
