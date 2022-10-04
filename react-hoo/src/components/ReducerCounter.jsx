import React, {useReducer} from "react";
// // useReducer is also used to store and handle state data
// // useState  is built  on  useReducer .
 

// const intialState = 0 ;
// const reducer = (state , action) => {
//     switch(action) {
//         case 'increment' :
//             return state + 3 ;

//         case 'decrement' :
//             return state - 1 ;

//         case 'reset' :
//             return intialState ;

//         default :
//             return state ;
//     }
// } ;


// export function ReducerCounter(){
//     const [count , dispatch] = useReducer(reducer , intialState)

//     return ( 
//         <>

//         <h1>Count = {count}</h1>
//         <button onClick={() => dispatch("increment")}>Add</button>
//         <button onClick={() => dispatch("decrement")}>Subtract</button>
//         <button onClick={() => dispatch("reset")}>reset</button>
        
//         </>
//     )
// }




// ##########===>>  In Case of  Objects  <<==##########



const intialState = {
    value : 0 ,
};

const reducer = (state , action) => {
    // switch(action) {
    //     case 'increment' :
    //         return {...state , value : state.value + 1} ;

    //     case 'decrement' :
    //         return {...state , value : state.value - 1} ;

    //     case 'reset' :
    //         return intialState ;

    //     default :
    //         return state ;
    // }
    
    switch(action.type) {
        case 'increment' :
            return {...state , value : state.value + action.value} ;

        case 'decrement' :
            return {...state , value : state.value - action.value} ;

        case 'reset' :
            return intialState ;

        default :
            return state ;
    }
} ;


export function ReducerCounter(){
    const [countObj , dispatch] = useReducer(reducer , intialState)

    return ( 
        <>

        <h1>Count = {countObj.value}</h1>
        <button onClick={() => dispatch("increment")}>Add</button>
        <button onClick={() => dispatch("decrement")}>Subtract</button>
        <button onClick={() => dispatch("reset")}>reset</button>
        
        <button onClick={() => dispatch({ type : "increment" , value : 5})}>Increment By 5</button>
        <button onClick={() => dispatch({ type : "increment" , value : 3})}>Increment By 3</button>
        <button onClick={() => dispatch({ type : "decrement" , value : 5})}>decrement By 5</button>
        <button onClick={() => dispatch({ type : "decrement" , value : 3})}>decrement By 3</button>
        <button onClick={() => dispatch({ type : "reset"})}>Reset</button>
        
        
        </>
    ) ;
}




