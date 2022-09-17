import React, { Component } from 'react'

export class Greeting extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            isLoggedIn: false ,
        }
    }


  render() {
    <p>Please Log in</p>
    return <p>Welcome Govind</p>
  }
}
