import React, { Component } from 'react'

export class Greeting extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            isLoggedIn: false ,
            message : true ,
        }
    }


  render() {

    // if( this.state.isLoggedIn)  //{
    // return (
    //     <>
    //     <h3>Welcome to Aircampus (16-September sessions)</h3>
    //     <p>Welcome Govind</p> 
    //     <p>This is our First class.</p>
    //     </>
    //   );
    // }else{
    //     return (
    //     <>
    //     <h3>Welcome to Aircampus</h3>
    //     <p>Please Log in</p> 
    //     <p>This is our First class.</p>
    //     </>
    //     )
    // }


    // //Here we are again writing the same Code  OR  We can also use  Ternariy  Operator


    let welcomeMessage;
    if(this.state.message){
        welcomeMessage = <p>Swagat hai Tumhara</p> ;
    }else{
        welcomeMessage = <p>Bhag ja Yahan se</p> ;
    }

    return (
    <>
    <h3>Welcome to Aircampus (16-September sessions)</h3>
    { this.state.isLoggedIn ?  <p>Welcome Govind</p> : <p>Please Log in</p> }
    <p>This is our First class.</p>

    {/* OR passing value through variable*/}

    {welcomeMessage}
    </>
    ) ;
  }
}
