// if we want to pass the data on from one to another page , we use  " useNavigate Hook "

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    let navigate = useNavigate() ;
    let data = {
        'text' : "passing this data from dashboard"
    }

    return(
        <>
        <h1>When  isLogged = true ; only then you can see this Dashboard page .</h1>
        <button onClick={()=>{navigate("/Logout" , {state:data}) }} >LogOut</button>
        </>
    )
} ;

export default Dashboard ;
