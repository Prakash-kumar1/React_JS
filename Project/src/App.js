// import './components/NewsApp/News.css';


import "./App.css";

import logo1 from "./logo1.png";
import Profile from "./components/GitProfile/Profile";
import { Quotes } from "./components/Quote/Quotes";


// import Layout from './components/NewsApp/Layout';
// import Headlines from './components/NewsApp/Headlines';
// import About from './components/NewsApp/About';
// import ContactUs from './components/NewsApp/ContactUs';
// import Team from './components/NewsApp/Team';
// import { Routes, Route } from "react-router-dom"
// import {useState} from 'react'
// import 'animate.css'


// import { Dice } from './components/DiceGame/Dice';
// import { Timer } from './components/Timer/Timer';
// import Api from './components/Movie-app/Api';


// getting api key from 
// Here is your key: 43b61648

export function App(){

  // const [Dark, setDark] = useState(false)
// {
//   "Color": "black",
// }


// const handleBgColor=()=>{
//     if(Dark){
//         setDark(false) 
//     }
//     else{
//         setDark(true)
//     }
  
// }



  return (
<>


{/* <h1>Hello React !!</h1>
<p>{3+6}</p> */}
{/* <Api/> */}
{/* <Dice /> */}
{/* <Timer /> */}

<header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
</header>
<Profile />


{/* <Quotes/> */}



{/* <div id='Appdiv' style={ Dark ? {backgroundColor:"black",color:'white'} : {backgroundColor:""}}  >
 
   
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Headlines />} />
          <Route path='About' element={<About />} />
          <Route path='ContactUs' element={<ContactUs />} />
          <Route path='Team' element={<Team />} />
        </Route>
      </Routes>
    
    <i className={ Dark ? "fa fa-sun-o" : "fa fa-moon-o"} style={Dark ? {color:"white"}:{color:"black"}} onClick={handleBgColor} id="changeicon"></i> */}

    {/* <h1>ram</h1> */}
    {/* </div> */}
</>

  );

}







