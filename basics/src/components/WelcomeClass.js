// Class based components

import React , {Component} from "react";
import { Child } from "./Child";

export class WelcomeClass extends Component {
    render() {
        const {name,age,place,food} = this.props

// // props  is  Property short form . props are read only data means , we can't change the data .
//         console.log(this.props) ;

        return (
            <div>
                <Child />
        <h4>

            {/* Welcome to Aircampus {this.props.name} . My age is {this.props.age} This is a class based components..i am from {this.props.place} */}

    {/* OR we can write also this way */}

            Welcome to Aircampus {name} . My age is {age} .i am from {place} and i love to eat {food} .
            </h4>
            </div>
            ) ;
    }
}