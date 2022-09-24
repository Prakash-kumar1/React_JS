import React , { useState } from "react";

export function TitleChangeHooks() {
    const [count , setCount] = useState(0) ;

    return(
<button onClick={ () => setCount(count + 1)}>click- {count} hooks</button>
    );
}






























