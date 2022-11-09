import { Counter } from "./components/counter/Counter";
import { Greet } from "./components/greet/Greet";
import Skills from "./components/skills/Skills";

export function App() {
  let  skills = ["HTML","CSS","JavaScript","Bootstrap","React-JS"]
  return (
    <div className="App">
      <Counter />
      <Greet />
      <Skills skill={skills}/>
    </div>
  );
}





