// Read about Ant Design (https://ant.design/docs/react/introduce)  and   testing library (https://testing-library.com/docs/)

import { Counter } from "./components/counter/Counter";
import { Greet } from "./components/greet/Greet";
import {Skills} from "./components/skills/Skills";

export function App() {
const  skills = ["HTML","CSS","JavaScript"]
  return (
    <div className="App">
      <Counter />
      <Greet />
      <Skills skills={skills}/>
    </div>
  );
}



