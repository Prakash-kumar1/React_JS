import React  from "react"
import { ComponentC } from "./ComponentC"

export function ComponentB(props) {
    return (
        <div>

{/* Printing props in Component B */}
            {/* <h1>Hi everyone , I am Component-B = {props.name}</h1> */}
            
            <h1>Hi everyone , I am Component-B </h1>

{/* Passing props in Component C */}
            <ComponentC name = {props.name}/>
        </div>
    )
}

