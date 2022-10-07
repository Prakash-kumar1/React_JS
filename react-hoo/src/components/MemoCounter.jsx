// ########  03- October sessions ########
// Definition ==>>  useMemo hook memoize the function , which  do heavy  Operations . it optimize  Expensive  Operations .
//                    if there is two Functions , in one function if we do heavy operations (like line no - 26)  then  IInd functions 
//                   also face some problem in rendering . For removing problem for IInd Function we use ==> " useMemo "


import React, {useState , useMemo} from 'react'

export  function MemoCounter() {

// ##@@ Example - 1   Craeting  Two  Counter Functions 
    const [counterOne , setCounterOne] = useState(0)
    const [counterTwo , setCounterTwo] = useState(0)

// ##@@ Example - 2   Craeting  one Factorial and  Input  Functions 
const [counter , setCounter] = useState(1) ;
const result = useMemo(() => {
    return factorial(counter) ;
})
const [name , setName] = useState(" ") ;



const incrementOne = () => {
    setCounterOne((prevCounterOne) => prevCounterOne+1) ;
} ;

const incrementTwo = () => {
    setCounterTwo((prevCounterOne) => prevCounterOne+1) ;
} ;


const isEven = useMemo(() => {
    console.log("Even Function") ;
    let i = 0 ;
    while(i < 2000000000) i++ ;
    return counterOne % 2 === 0 ;
}, [counterOne]);



function factorial(n) {
    let i = 0 ;
    while(i < 1000000000) i++ ;
    if(n<0) {
        return -1 ;
    }
    if(n == 0) {
        return 1 ;
    }

    return  n *  factorial(n - 1) ;
}


  return (
    <>
    <div>
<button onClick={incrementOne} >counterOne = {counterOne}</button>
{ isEven ? <span> Even </span> :  <span> Odd </span>}
    </div>

    <div>
    <button onClick={incrementTwo} >counterTwo = {counterTwo}</button> 
    </div>


    {/* // ##@@ Example - 2   Craeting  one Factorial and  Input  Functions  */}

    <div>
        <h1>Factorial  of {counter}  is: <span>{result}</span> </h1>
    </div>
    <div>
    <button onClick={() => setCounter(counter - 1)} >Decrement</button> 
    <button onClick={() => setCounter(counter + 1)} >Increment</button> 
    </div>
    <div>
        <label>Enter Name</label>
        <input type="text" value={name} placeholder="Enter Name"  onChange={(e) => setName(e.target.value)}/>
        <p>{ `My name is ${name}` }</p>
    </div>

    </>
  ) ;
}

