// !!!@@@###$$$%%%^^^&&&  Manit Sir Class !!!@@@###$$$%%%^^^&&&
import {useSelector} from 'react-redux';
// useSelector is a react hook , that helps us picking up the current state.
import {Dashboard} from "./components/Dashboard";
// import Counter from "./components/Counter";
import Home from "./components/Home";
import { Login } from "./components/LoginForm";

// !!!@@@###$$$%%%^^^&&& -->> Geeky Shows  <<-- !!!@@@###$$$%%%^^^&&&
import { Coin } from './features/coin/Coin';
import { Counter } from './features/counter/Counter';
import { Theme } from './features/theme/Theme';


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
    
    {loggedInUser ? <Dashboard /> : 
      <> <Home />
        <Login />
      </>
      }
      
<Counter />
<Coin />
<Theme />
    </>
  );
}

export default App;
