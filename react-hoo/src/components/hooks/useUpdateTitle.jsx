// ######### =>  04-October Session   ######### =>

import React, {useEffect} from "react";

export function useUpdateTitle(count) {
    useEffect(() => {
        document.title = `Count - ${count}`
    }, [count]) ;
}