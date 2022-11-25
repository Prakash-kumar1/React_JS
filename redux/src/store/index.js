import {createStore} from 'redux' ;

const DEFAULT_STATE = {
    counter: 10,
    name: "Prakash",
    age: 22,
    city: "Obra",
    mobile: [],
    desktop: [
        {
            make: "MacBook-Pro"
        } ,
        {
            make: "MacBook-Pro"
        } ,
        {
            make: "MacBook-Pro"
        } 
    ]
}

// action = {
//     "type" : "increment" ,
//     "payload" : {
//         "step" : 5
//     }
// }

const counterReducer = (state = DEFAULT_STATE, action) => {
    if (action.type === 'increment'){
        return {...state, counter: state.counter + 1}
    }
    return state 
}

const store = createStore(counterReducer)

export default store ;
