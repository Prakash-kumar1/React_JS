import { useState } from "react";

// !!!@@@###$$$%%%^^^&&& -->> Creating Counter using Redux-Toolkit && using in Coin <<-- !!!@@@###$$$%%%^^^&&&

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, divideByAmount } from './counterSlice' ;

export const Counter = () => {

// !!!@@@###$$$%%%^^^&&& -->> Creating Counter using Redux-Toolkit && using in Coin <<-- !!!@@@###$$$%%%^^^&&&
const count = useSelector((state) => state.counter.count) ;
const dispatch = useDispatch() ;

// !!!@@@###$$$%%%^^^&&& -->> Simple Counter using React <<-- !!!@@@###$$$%%%^^^&&&
const [num, setNum] = useState(0)

  return (
    <div>

   <button aria-label="Increment value" onClick={() => { dispatch(increment()) }}> + </button>
    <h1>Counter by redux-Toolkit: {count}</h1>
    <button aria-label="Decrement value" onClick={() => { dispatch(decrement()) }}> -</button>

    <button onClick={() => { dispatch(incrementByAmount(100)) }}> IncrementBy100 </button>
    <button onClick={() => { dispatch(divideByAmount(10)) }}> divideBy10 </button>

{/* // !!!@@@###$$$%%%^^^&&& -->> Simple Counter using React <<-- !!!@@@###$$$%%%^^^&&& */}
    <h1>Counter by react: {num}</h1>
    <button onClick={() => {setNum(num + 1)}}> + </button>
    <button onClick={() => {setNum(num - 1)}}> - </button>

    </div>
  )
}


