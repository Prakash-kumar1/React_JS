import {createStore} from 'redux' ;

// const DEFAULT_STATE = {
//     counter: 100,
//     name: "Prakash",
//     age: 22,
//     city: "Obra",
//     mobile: [],
//     desktop: [
//         {
//             make: "MacBook-Pro"
//         } ,
//         {
//             make: "MacBook-Pro"
//         } ,
//         {
//             make: "MacBook-Pro"
//         } 
//     ]
// }

// // action = {
// //     "type" : "increment" ,
// //     "payload" : {
// //         "step" : 5
// //     }
// // }

// const counterReducer = (state = DEFAULT_STATE, action) => {
//     console.log("action", action) ;

//     if (action.type === 'increment'){
//         console.log("Step Increases", action.payload.step)
//         // return {...state, counter: state.counter + 1}
//     // OR
//         return {...state, counter: state.counter + action.payload.step} 
//     }
//     else if (action.type === 'decrement'){
//         console.log("Step decreases", action.payload.step)
//         // return {...state, counter: state.counter - 1}
//         return {...state, counter: state.counter - action.payload.step} 

//     }

//     return state 
// }

// const store = createStore(counterReducer)


// Creating a Log In  &&  LogOut (Authentication) in Redux :-

const DEFAULT_STATE = {
    "loggedInUser": null,
}


const authReducer = (state = DEFAULT_STATE, action) => {

    if(action.type==='SET_LOGIN_DATA'){
        return {"loggedInUser": action.payload}
    }

    return state
}


const store = createStore(authReducer)

export default store ;
