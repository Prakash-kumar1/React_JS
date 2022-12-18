// ######### ===>   useEffect()  <===##########


// Definition ==>>  useEffect is a hook for encapsulating code that has " side effect ," if you are familiar
//                  with React class lifecycle methods , you can think of useEffect hook as 
// componentDidMount ,  componentDidUpdate  and  componentWillUnMount  combined .

// ==>> Example <<==>>  import React , { useState , useEffect } from react ;
//                       useEffect(Function)
//                       useEffect( Function , Array )

// The function passed to useEffect will run after the render is commited to the screen .
// IInd Argument to useEffect that is the  array  of values that the effects  depends on .

// <<===>> NOTE <<===>>  You can call useEffect as many times as you want .

// useEffect(() => {
//     console.log("Hello Use-Effect")
// }) ;

// // when passing  IInd  parameter means it only call on that parameter 
// useEffect(() => {
//     console.log("Hello Use-Effect")
// } , [count] ) ;


//Question =1 :: What does useEffect() do ?? 
// Answer =>>  By using this hook , you tell React that your component needs to do something after render . React
//             will  remember the function  you passed  and call it later after  performing  the  DOM  Updates .
//              In this effect , we set the document title , we could also perform data fetching or call some 
//              other  imperative API .


// Question =2 :: Why is useEffect() called inside a component ?? 
// Answer =>>  Placing useEffect inside the component let's us access  the state variable or any props 
//              right from the effect .


// Question =3:: Does useEffect() run after  every  Render ?? 
// Answer =>>  Yes , by default , it runs both after  the first render  and after every  update . 


import React , { useState , useEffect } from "react" ;

export function UseEffect() {
    const [count , setCount] = useState(0) ;
    const [count1 , setCount1] = useState(100) ;
    const [name , setName] = useState("light") ;
    const [roll , setRoll] = useState( ) ;



const handleIncrement = () =>{
    setCount(count + 1) ;
}

const handleDecrement = () =>{
    setCount1(count1 - 10) ;
}

const handleClick = () => {
    setName("Prakash Kumar Singh ") ;
    setRoll("AR45GHII098") ;
};


// Any changes in element  Use-Effect called  , you can see in console 
useEffect(() => {
        console.log(" Use-Effect called")
    },[count1 , roll]) ;       //it only monitor changing in count1 see in console . 


    return(
        <>
        <h2>Count Up : {count}</h2>
        <h2>Count down : {count1}</h2>
        <h2>Name : {name}</h2>
        <h2>Roll No. : {roll}</h2>
            <button type="button" onClick={handleDecrement}>Subtract</button>
            <button type="button" onClick={handleIncrement}>Addition</button>
            <button type="button" onClick={handleClick}>Change</button>
        </>
    ) ;

}




















































































