import React, {useState} from "react";

export function LogInForm() {
    const [user , setUser] = useState("") ;
    const [userErr , setUserErr] = useState(false) ;
    const [password , setPassword] = useState("") ;
    const [passwordErr , setPasswordErr] = useState(false) ;

    function userHandler(e) {
        let item = e.target.value ;

        if(item.length < 4){
            setUserErr(true)
        } else {
            setUserErr(false)
        }
    }


    function loginHandler(e) {
        e.preventDefault()
    }
    
    return(
        <div>
            <h1>Log In Form</h1>
            <form onSubmit={loginHandler}>
                <input type="text" placeholder="Username" onChange={userHandler}/> <br /><br />
                <input type="password" placeholder="Enter User Password"/> <br /><br />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}