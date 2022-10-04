import React, {useReducer} from "react";
// useReducer is also used to store and handle state data
// useState  is built  on  useReducer .
 

const intialState = 0 ;
const reducer = (state , action) => {
    switch(action) {
        case 'increment' :
            return state + 1 ;

        case 'decrement' :
            return state - 1 ;

        case 'reset' :
            return intialState ;

        default :
            return state ;
    }
} ;


export function ReducerCounter(){
    const [] = useReducer(intialState)

}




