// Read about Ant Design (https://ant.design/docs/react/introduce)  and   testing library (https://testing-library.com/docs/)

// import { Counter } from "./components/counter/Counter";
// import { Greet } from "./components/greet/Greet";
// import {Skills} from "./components/skills/Skills";
// import {Counter2} from "./components/counter2/Counter2";
import { useState } from "react";
import { Counter3 } from "./components/counter3/Counter3";

export function App() {
// const  skills = ["HTML","CSS","JavaScript"] ;
const [count, setCount] = useState(0) ;

const handleIncrement = () => {
setCount((prev) => prev + 1) ;
} ;

const handleDecrement = () => {
setCount((prev) => prev - 1) ;
} ;


  return (
    <div className="App">
      {/* <Counter />
      <Greet />
      <Skills skills={skills}/>
      <Counter2 /> */}
      <Counter3 count={count} handleIncrement = {handleIncrement}  handleDecrement = {handleDecrement} />
    </div>
  );
}



