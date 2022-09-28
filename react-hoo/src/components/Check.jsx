// ###########    27 - September sessions  ########### 


import React from "react" ;
import { useEffect } from "react";
import { useState } from "react";


//  #####  Creating counter with a time interval #####
function Check() {
    const [count , setCount] = useState(0) ;

    const change = () => {
        console.log("In Change") ;
        setCount((prev) => prev + 1) ;
    } ;

    useEffect(() => {
        console.log("In Effect") ;
let data = setInterval(change , 1000) ;
// Whenever  you use setInterval , setTimeout , DOM Changes and  web-API's , always clear in return statement . 


// This Returning Part is known as " Component will unMount"  OR  " Clean Up"

return () => {
    console.log("Cleaning the Component...") ;   //In console , we see this many times means Ist component remove then update.
    clearInterval(data) ;   //In app.js the condition of 10 to 15 it again starts from 0 due to clearInterval .
    } ;
    } , []) ;


return <div>{count}</div> ;

}

export default Check ;


