// // ###########===>>  Props  with  Functional Component   ###########===>>  

// import React from 'react'

// export default function Prop(props){          //pass the data as argument
//     return(
//         <div>
//             <h1>Using Props in functional component and {props.text} </h1>
//             <h2>{props.obj.name} always remember that {props.obj.note}</h2>
//             <h2>Do you want to eat {props.obj.food} ?? </h2>
//         </div>
//     )
// }


/// // ###########===>>  Always Comment Above  " OR "  Below then used   ###########===>>  


//###########===>>   Props  with  Class Component  ###########===>>  

import React from 'react'

export default class Prop extends React.Component{

    render(){
        return(
            <div>
           <h1>Using Props in Class component </h1>
           <h2>{this.props.text1}</h2>
             <h2>{this.props.obj1.name} Do you want to eat {this.props.obj1.food} ?? Yes i love to eat {this.props.obj1.food} Biryani </h2>
            </div>
        )
    }
}
