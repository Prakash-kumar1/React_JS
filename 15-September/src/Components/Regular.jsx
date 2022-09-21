import React, { Component } from 'react'
//Pure Component is used for Optimization of React 


// shouldComponentUpdate() => By default return True

export default class Regular extends Component {
  render() {
    console.log("----> Regular Component <----" , this.props.name)

    return   <p>Regular Component = {this.props.name}</p>
  }
}
