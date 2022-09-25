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

// // when passing  IInd  parameter
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






























































































