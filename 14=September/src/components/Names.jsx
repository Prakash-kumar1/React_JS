////@@@###$$$%%%***  16-September sessions   //@@@###$$$%%%***

import React, { Component } from 'react'

export class Names extends Component {
  constructor(props){
    super(props)
    this.state = {
      names : ['hema' , 'Abhi' , 'Amit' , 'Raja' , 'Rani'],
      breeds : ['Golden Retriver' , 'German Sheperd' , 'Lebrador' , 'Bulldog' , 'Pamerian'],
    }
  }



  render() {

 ////@@@###$$$%%%***  Storing In a variable ////@@@###$$$%%%***
// let namesTag = this.state.names.map((name) =><p>{name}</p>) 
// return namesTag  ;



 return (
//       <>
//       <p>{this.state.names[0]}</p>
//       <p>{this.state.names[1]}</p>
//       <p>{this.state.names[2]}</p>
//       <p>{this.state.names[3]}</p>
//       <p>{this.state.names[4]}</p>
//       </>

// //@@@###$$$%%%***   In the above method we are writting same code again , so here we use Map ()   @@@###$$$%%%*** 
      
// Every time on using map function , it is neceesary to pass a Unique key like key={dog}
     this.state.breeds.map((dog) =><p key={dog}>{dog}</p>) 

     
    );
  }
}
