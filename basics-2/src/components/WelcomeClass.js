// Class based components

import React , {Component} from "react";
import { Child } from "./Child";

export class WelcomeClass extends Component {
    render() {
        const {name,age} = this.props

// // props  is  Property short form . props are read only data means , we can't change the data .
//         console.log(this.props) ;

        return (
            <div>
                <Child />
        <h2>
            Welcome to Aircampus {this.props.name} . My age is {this.props.age} This is a class based components.

    {/* OR we can write also this way */}

            Welcome to Aircampus {name} . My age is {age} This is a class based components.
            </h2>
            </div>
            ) ;
    }
}