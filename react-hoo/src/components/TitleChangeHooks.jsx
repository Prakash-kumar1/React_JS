// @@@####^^&&&****   23-September Sessions   // @@@####^^&&&****


// @@@####   Changes in the title by using  { useEffect }  method  ######

import React , { useState , useEffect } from "react";

export function TitleChangeHooks() {
    const [count , setCount] = useState(0) ;
    const [name, setName] = useState("");

    const changeCount = () => {
        setCount((prev) => prev + 1);
      };



    useEffect( () => {
        console.log("Hooks calling") ;       //Hooks calling every time so, for print like did mount we just add [] in last
// for the first time load (rendering process)
//  for each  re-Rendering process (whenever my state changes) my useEffect will get  called
        document.title = ` ${count} times clicked ` ;

// On clicking on " click- {count} hooks "  , we can see it print  "Hooks calling"  multiple times in console . so, 
// for removing this problem we use , [] it behaves like ComponentDidMount() .
    }, [count]) ;



    useEffect(() => {
            console.log("name changed");
          } ,  []);       //you can write name in [] , just for seeeing the difference .



    return(
        <>

<input type="text"  onChange={(e) => setName(e.target.value)} value={name} /> 

<p>{count}</p>

<button onClick={ () => setCount(count + 1)}>click- {count} hooks</button>
{/* Or you can also write this way */}
<button onClick={ () => setCount((prev) => (prev + 1))}>click- {count} hooks</button>
    
</>
    );
}






























