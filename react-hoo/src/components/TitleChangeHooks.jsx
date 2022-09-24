// @@@####^^&&&****   23-September Sessions   // @@@####^^&&&****


// @@@####   Changes in the title by using  { useEffect }  method  ######

import React , { useState , useEffect } from "react";

export function TitleChangeHooks() {
    const [count , setCount] = useState(0) ;

    useEffect( () => {
// for the first time load (rendering process)
//  for each  re-Rendering process (whenever my state changes) my useEffect willl get  called
        document.title = ` ${count} times clicked ` ;
    }) ;

    return(
        <>

<button onClick={ () => setCount(count + 1)}>click- {count} hooks</button>
{/* Or you can also write this way */}
<button onClick={ () => setCount((prev) => (prev + 1))}>click- {count} hooks</button>
    
</>
    );
}






























