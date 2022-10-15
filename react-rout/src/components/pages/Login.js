
// For Receiving the data , we use ( useLocation Hook)
import { useLocation } from "react-router-dom";

const Login = () => {
    let location = useLocation()
    console.log(location) ;

    return(
        <>
        <h1>When  isLogged = false ; only then you can see this LogIn page . Navigate tag Re-direct you this
            page . this an example of conditional Rendering
        </h1>
        <h3>{location.state.st}</h3>
        </>
    )
} ;

export default Login ;

