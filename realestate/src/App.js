import { Routes, Route } from "react-router-dom";
import {useState} from "react";
import './App.css';

import {Property} from "./components/Property";
import {Header} from "./components/Header";
import {Page } from './components/Page';

export const App = () => {

  const [favProperty, setfavProperty] = useState([])

  return (
   <Routes>
        <Route path="/" element= {<Header favProperty={favProperty} setfavProperty={setfavProperty}/>} >
          <Route index element= {<Property favProperty={favProperty} setfavProperty={setfavProperty}  />} />
          <Route path="page" element= {<Page favProperty={favProperty} setfavProperty={setfavProperty} />} /> 
        </Route>
    </Routes>
  );

}




