// ######   Starting  28 - september sessions   ######

import React , { useState , useEffect }  from  "react" ;
import  axios   from  " axios "  ;

export function DataFetch() {
    const [posts , setPosts]  =  useState( [] ) ;

    useEffect(() => {
    console.log  (axios.get("https://jsonplaceholder.typicode.com/posts"))
    }) ;

    return <div>DataFEtching</div>
}

