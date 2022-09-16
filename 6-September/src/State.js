// Definition ==>>  state is a Internal object of Class . it is private means it can't access from outside of class
//                  state is a object , works like a variable . State are Changeable but Props are not Changeable .


import React from 'react'

export default class State extends React.Component{

    constructor(){
        super() ;
        this.state = {
            name : 'Praksh Kumar' ,
            work : 'Frontend Engineer' ,
            package : '25 LPA' ,
            email : 'kumarsanju4881@gmail.com',
            count : 0 ,
        }
    };

    change() {
        this.setState({
            name : 'Prakash Kumar singh' ,
            work : 'Frontend Developer' ,
            package : '45 LPA' ,
            email : 'prakashkr4881@gmail.com',
            count : this.state.count + 1 ,         //you also write ' - ' sign 
        })
    }


    render(){
        return(
            <div className='state'>
                <h1>State.js is an example of State . </h1>
                <h1>Counting {this.state.count}</h1>
                <h2>Hi , my name is {this.state.name} . I am a {this.state.work} in a MNC. I joined as a fresher 
                and my package is {this.state.package}. My email ID is {this.state.email}</h2>

                <button onClick={() => {this.change()}}>change data</button>
            </div>
        )
    }
}