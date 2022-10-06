// #####****** ==>>>   Creating  a form validation  Home - work  given by Vasanth Sir on  04/10/2022  

import React, {useState} from "react";

export function LogInForm() {
    const [user , setUser] = useState("") ;
    const [userErr , setUserErr] = useState(false) ;
    const [password , setPassword] = useState("") ;
    const [passwordErr , setPasswordErr] = useState(false) ;

    function userHandler(e) {
        let item = e.target.value ;

        if(item.length < 7){
            setUserErr(true)
        } else {
            setUserErr(false)
        }
        setUser(item)
    }


    function passwordHandler(e) {
        let item = e.target.value ;

        if(item.length < 4){
            setPasswordErr(true)
        } else {
            setPasswordErr(false)
        }
        setPassword(item)
    }


    function loginHandler(e) {
        if(user.length < 7 || password.length < 4){
            alert("Invalid Data")
        }else{
            alert("All Good")
        }
        e.preventDefault()
    }
    
    return(
        <div>
            <h1>Log In Form</h1>
            <form onSubmit={loginHandler}>
                <input type="text" placeholder="Username" onChange={userHandler}/>
               { userErr ? <span>Invalid Data</span> : null} <br /><br />
                <input type="password" placeholder="Enter User Password"  onChange={passwordHandler}/> <br /><br /> 
                { passwordErr ? <span>Invalid Password</span> : null} <br /><br />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}