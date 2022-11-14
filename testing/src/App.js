// Read about Ant Design (https://ant.design/docs/react/introduce)  and   testing library (https://testing-library.com/docs/)

import { Counter } from "./components/counter/Counter";
import { Greet } from "./components/greet/Greet";
import {Skills} from "./components/skills/Skills";
import {Counter2} from "./components/counter2/Counter2";

export function App() {
// const  skills = ["HTML","CSS","JavaScript"] ;
  return (
    <div className="App">
      <Counter />
      <Greet />
      <Skills skills={skills}/>
      <Counter2 />
    </div>
  );
}



