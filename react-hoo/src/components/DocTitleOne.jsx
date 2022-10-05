// ######### =>  04-October Session   ######### =>

import React, {useState} from "react";
import { useUpdateTitle } from "../components/hooks/useUpdateTitle";
//  OR  You can also write this way
// import { useUpdateTitle } from "./hooks/useUpdateTitle";


export function DocTitleOne() {
    const [count , setCount] = useState(0) ;
    useUpdateTitle(count) ;

    return (
        <div>
            <button onClick={() => setCount((prev) => prev + 1)}>click - {count}</button>
        </div>
    )
}



