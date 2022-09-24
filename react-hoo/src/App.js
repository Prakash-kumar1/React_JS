// import logo from './logo.svg';
import './App.css';
import { Define } from './components/Define';
import { CounterHooks } from './components/CounterHooks';
import { StateWithObj } from './components/StateWithObj';
import { StateWithArr } from './components/StateWithArr';
import { TitleChangeClass } from './components/TitleChangeClass';


export function App(){
  return (
 <>
  <Define />
  <CounterHooks />
  <StateWithObj />
  <StateWithArr />
  <TitleChangeClass />
  </>
  );
}



