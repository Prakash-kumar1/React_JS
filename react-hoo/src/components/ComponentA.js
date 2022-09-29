import React  from "react"
import { ComponentB } from "./ComponentB"

export function ComponentA(props) {
    return (
        <div>

{/* Printing props in Component A */}
            {/* <h1>This is Component-A = {props.name}</h1> */}

            <h1>This is Component-A</h1>

{/* Passing props in Component B */}
            <ComponentB name={props.name}/>
        </div>
    )
}
