////@@@###$$$%%%***  19-September sessions   //@@@###$$$%%%***

import React, { Component } from 'react'

export default class Names2 extends Component {
  constructor(props){
    super(props)
    this.state = {
      names : [
        {
            id : 1 ,
            name :'hema'
        } , 
        {
            id : 2 ,
            name :'Abhi'
        } , 
        {
            id : 3 ,
            name :'Anjali'
        } , 
        {
            id : 4 ,
            name :'amit'
        } , 
        {
            id : 5 ,
            name :'govind'
        } , 
],
     
    } ;
  }


  render() {
    console.log(this.props) ;
 return (

    <>

    {this.props.children}

    {this.state.names.map((nameObj) => (
    <p key={nameObj.id}>
    {nameObj.id} {nameObj.name}
    </p>
    ))}

 </>

    );
  }
}
