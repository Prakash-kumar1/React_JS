// For Receiving the data , we use ( useLocation )
import { useLocation } from "react-router-dom";

const Logout = () => {

    let location1 = useLocation()
    console.log(location1) ;

    return(
        <>
        <h3>This is logout page . we are using useNavigate hook to come on this Page</h3>
        <h4>{location1.state.text} Logged Out!!</h4>
        </>
    )
} ;

export default Logout ;