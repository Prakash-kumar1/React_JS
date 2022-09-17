import React, { Component } from 'react'

// Learning 3 methods in 16-September session
// 1==>  Using if-Else inside render() but writting same code again .
// 2==>  Using  Ternary Operator inside render ()
// 3==>  Using  Variables  inside render ()
// 4==>  Using  Functions (writting all conditions inside the function ) outside render ()


export class Greeting extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            isLoggedIn: false ,
            message : true ,
            chats : true ,
        }
    }

// Using Functions ==>>
//     getLoveMessage = () =>{
//         let loveMessage;
//     if(this.state.chats){
//         loveMessage = (
//         <>
//         <p>I Love You </p>
//         <p>From Bottom of my Heart</p> ;
//         </>
//         );
//     }else{
//         loveMessage = <p>I hate you</p> ;
//     }
//     return loveMessage ;
//     };


// // Optimizing the above Function Code :=> we write By default Line no.-41 is my condition but if Below
// "If condition" is true then print Line no.-46 ,47. this is also a way to write code for avoiding Else block .


    getLoveMessage = () =>{
        let loveMessage= <p>I hate you</p>;
    if(this.state.chats){
        loveMessage = (
        <>
        <p>I Love You </p>
        <p>From Bottom of my Heart</p> ;
        </>
        );
    }
    return loveMessage ;
    };


  render() {

// ##### ==>>When checking If Else conditions comment welcomeMessage and  Ternariy  Operator  whole code <<==#####

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

    {/* OR passing value through Functions*/}

    {this.getLoveMessage()}
    </>
    ) ;
  }
}
