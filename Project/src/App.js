import React from 'react';
import './App.css';
import Main from './components/NewsApp/Main';
import Contact from './components/NewsApp/Contact';
import {Route, Routes} from 'react-router-dom'
import Headlines from './components/NewsApp/Headlines'
import Buissness from './components/NewsApp/Buissness'
import About from './components/NewsApp/About'
// import { Dice } from './components/DiceGame/Dice';
// import Api from './components/Movie-app/Api';

// getting api key from 
// Here is your key: 43b61648

export function App(){

  return (
<>
{/* <h1>Hello React !!</h1>
<p>{3+6}</p> */}
{/* <Api/> */}
{/* <Dice /> */}

<Routes>
        <Route path="" element={ <Main/> } />
        <Route path='/contact' element={  <Contact />}/>
        <Route path='/about' element={  <About />}/>
        <Route path='/headlines' element={  <Headlines />}/>
        <Route path='/buissness' element={  <Buissness/>}/>
  </Routes>
</>

  );

}







