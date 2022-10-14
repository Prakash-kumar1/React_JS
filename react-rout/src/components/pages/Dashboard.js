import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    let Navigate = useNavigate()
    return(
        <>
        <h1>When  isLogged = true ; only then you can see this Dashboard page .</h1>
        <button onClick={()=>{Navigate("/Logout")}} >LogOut</button>
        </>
    )
} ;

export default Dashboard ;