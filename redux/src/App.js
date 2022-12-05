// import Counter from "./components/Counter";

import {useSelector} from 'react-redux';
// useSelector is a react hook , that helps us picking up the current state.
import {Dashboard} from "./components/Dashboard";
import Home from "./components/Home";
import { Login } from "./components/LoginForm";

// Creating a Log In  &&  LogOut (Authentication) in Redux :-

// Steps :=> (1) List of Registered Users .
//           (2) LogIn form - email , password
//           (3) once logged in , redirect to the Dashboard
//           (4) if not Logged in , redirect to the Home Page

// requirements :-  Logged in user information should be saved in Redux .


function App() {

  const loggedInUser = useSelector((state) => {
    return state.loggedInUser
  })


  return (
    <>

    {/* <Counter/> */}
    
    {loggedInUser ? 
      
      <Dashboard /> : 
      
      <> <Home />
        <Login />
      </>}

    </>
  );
}

export default App;
