// ########  03- October sessions ########
// Definition ==>>  useMemo hook memoize the function , which  do heavy  Operations . it optimize  Expensive  Operations .
//                    if there is two Functions , in one function if we do heavy operations (like line no - 26)  then  IInd functions 
//                   also face some problem in rendering . For removing problem for IInd Function we use ==> " useMemo "


import React, {useState , useMemo} from 'react'

export  function MemoCounter() {

// ##@@ Example - 1   Craeting  Two  Counter  
    const [counterOne , setCounterOne] = useState(0)
    const [counterTwo , setCounterTwo] = useState(0)

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

  return (
    <>
    <div>
<button onClick={incrementOne} >counterOne = {counterOne}</button>
{ isEven ? <span> Even </span> :  <span> Odd </span>}
    </div>

    <div>
    <button onClick={incrementTwo} >counterTwo = {counterTwo}</button> 
    </div>
    </>
  ) ;
}
