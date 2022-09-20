////@@@###$$$%%%***  19-September sessions   //@@@###$$$%%%***

import React, { Component } from 'react'

export default class Names2 extends Component {
  constructor(props){
    super(props)
    this.state = {
      breeds : ['Golden Retriver' , 'German Sheperd' , 'Lebrador' , 'Bulldog' , 'Bulldog' , 'Pamerian'],
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

{/* There is two Bulldog , so, if we delete one Bulldog another also delete . so, we use Index */}
{this.state.breeds.map((dog , index) =><p key={index}>{dog}</p>)} 


{/* But there is one more problem , if i delete Lebrador [index value = 2] then every index value fill that place 
then Bulldog have index value = 2 . so, for removing this problem we use ID */}

    {this.state.names.map((nameObj) => (
    <p key={nameObj.id}>
    {nameObj.id} {nameObj.name}
    </p>
    ))}

 </>

    );
  }
}
