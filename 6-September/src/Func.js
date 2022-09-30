import React from "react";

export default function Func(props){

    const fxn =() =>{
        alert("clicking on Functional component") ;
    }
    return(
        <div>
            <h2 onClick={fxn}>Func.js is a Functional Component example</h2>

            <h2> {props.text}</h2>
        </div>
    )
}

// Functional Component Introduction ==>>  when we are using Function inside components there is no class . it is
//                                        also known as " Stateless Components " .

// Benefits of Functional Component ==>> (1) writting less code .
                                    //   (2) there is no use of this and bind .
                                    //   (3) writting test-case is very easy .