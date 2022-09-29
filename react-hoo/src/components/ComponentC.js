import React , {useContext} from "react"
import { AgeContext , PlaceContext , FoodContext } from "../App"

export function ComponentC(props) {

    const age = useContext(AgeContext) ;
    const place = useContext(PlaceContext) ;
    const food = useContext(FoodContext) ;

    return (
        <div>

{/* Printing props in Component C */}
            <h1>Welcome !! Component-C = {props.name}</h1>
           <h2>My age is - {age}</h2>
           <h2>I am living in - {place}</h2>
           <h2>I love to eat - {food}</h2>
        </div>
    )
}

