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