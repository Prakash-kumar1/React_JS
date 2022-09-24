// @@@####^^&&&****   22-September Sessions   // @@@####^^&&&****

import React , { useState }from 'react'

export function StateWithObj() {
    const [name , setName]  =  useState({
        firstName : "" ,
        lastName : "" ,

    }) ;

  return (
    <>
    <form>
        <div>
        <label htmlFor="">First Name</label>
        <input type="text" id='fname' 
        onChange={(e) => {

// When you are using object you need to spread the Object first before setting the value
            setName({...name , firstName : e.target.value})

        }}

        value={name.firstName} />
        </div>

        <div>
        <label htmlFor="">last Name</label>
        <input type="text" id='lname' 
        onChange={(e) => {

            // When you are using object you need to spread the Object first before setting the value
                        setName({...name , lastName : e.target.value})
            
                    }}
        value={name.lastName} />
        </div>

        <p>My first name is {name.firstName} and my  last name is {name.lastName}</p>

    </form>
    </>
  )
}
