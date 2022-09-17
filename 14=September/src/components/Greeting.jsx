import React, { Component } from 'react'

export class Greeting extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            isLoggedIn: false ,
        }
    }


  render() {
    if( this.state.isLoggedIn)  //{
    // return (
    //     <div>
    //     <h3>Welcome to Aircampus (16-September sessions)</h3>
    //     <p>Welcome Govind</p> 
    //     <p>This is our First class.</p>
    //     </div>
    //   );
    // }else{
    //     return (
    //     <div>
    //     <h3>Welcome to Aircampus</h3>
    //     <p>Please Log in</p> 
    //     <p>This is our First class.</p>
    //     </div>
    //     )
    // }

    // //Here we are again writing the same Code  OR  We can also use  Ternariy  Operator

    
    return (
    <>
    <h3>Welcome to Aircampus (16-September sessions)</h3>
    { this.state.isLoggedIn ?  <p>Welcome Govind</p> : <p>Please Log in</p> }
    <p>This is our First class.</p>
    </>
    ) ;
  }
}
