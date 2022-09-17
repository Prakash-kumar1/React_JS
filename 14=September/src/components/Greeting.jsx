import React, { Component } from 'react'

export class Greeting extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            isLoggedIn: false ,
        }
    }


  render() {
    if( this.state.isLoggedIn){
        return  <p>Welcome Govind</p> 
    }else{
        return <p>Please Log in</p> 
    }

    // OR We can also use  Ternariy  Operator
    
    // return this.state.isLoggedIn ?  <p>Welcome Govind</p> : <p>Please Log in</p> ;
  }
}
