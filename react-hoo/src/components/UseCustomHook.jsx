// @@@###$$$%%%^^^&&& <<===>>   Creating  our  own  Hook (Custom Hook)   @@@###$$$%%%^^^&&& <<===>>

// Definition =>>  A custom hook is a Javascript function , when we want to share logic between  two  JS  Functions
//                 ,we extract it to a 3rd  function .
//          Building your own hooks let's you extract component logic into reuseable functions .
// You can write custom Hooks that cover a wide range of use cases like form handling , animation , timers ,
// Declarative Subscriptions  and  many more .


// ==>> Creating  Custom Hook <<==>>  A custom hook  is a JavaScript  Function whose name starts with  "use"  and 
//                                       that may call other  hooks . 

import React , { useState } from "react";

export default function UseCustomHook(){
    const [count , setCount] = useState(0) ;

    const handleIncrement = () =>{
        setCount(count + 5) ;
    }

    return {
        count , handleIncrement 
    };

}




