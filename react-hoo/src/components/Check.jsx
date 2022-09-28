// ###########    27 - September sessions  ########### 


import React from "react" ;
import { useEffect } from "react";
import { useState } from "react";


//  #####  Creating counter with a time interval #####
function Check() {
    const [count , setCount] = useState(0) ;

    const change = async () => {
        console.log("In Change") ;
        setCount(count + 1) ;
    } ;

    useEffect(() => {
        console.log("In Effect") ;
let data = setInterval(change , 1000) ;


// This Returning Part is known as " Component will unMount"  OR  " Clean Up"
    return () => {
        console.log("Cleaning the Component...") ;
        clearInterval(data) ;
    } ;
    } , [count]) ;


return <div>{count}</div> ;

}

export default Check ;


