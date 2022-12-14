import React from 'react' ;
import { useState, useEffect } from 'react';

export function Skills({skills}) {
    const [isLoggedIn , setIsLoggedIn] = useState(false) ;

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true) ;
        },1001) ;

    }) ; 


  return (
    <div>
        <ul>

            {/* {skills ? skills.map((skill) => <li key={skill}>{skill}</li>) : null} */}

{/* We can also use =>  "Optional Chaining" */}

{skills ?.map((skill) => <li key={skill}> I know {skill} </li>)}

        </ul>

{isLoggedIn ? (<button> Start Learning </button>) : (<button onClick={() => setIsLoggedIn(true)} >Sign In</button>)}
    </div>
  )
}

