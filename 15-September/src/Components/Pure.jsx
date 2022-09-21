// ##### Starting 20 September (Pure Component && Regular Component) sessions ####

import React, { PureComponent } from 'react'
//Pure Component is used for Optimization of React 

// shouldComponentUpdate() => Validate current props and newly coming props ,
//                              if both are same , returns False
//                              if there is any difference , returns True

export  class Pure extends PureComponent {
  render() {
    console.log("----> Pure Component <----" , this.props.name)

    return <p>Pure Component = {this.props.name}</p>
  }
}

// Parent state -->  Prakash Changes
// Child props -->  Child props Changes
// Updation Phase --> Comp will Receive props , shouldComponentUpdate , willComponentUpdate , Render , didComponentUpdate


