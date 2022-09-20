////@@@###$$$%%%***  19-September sessions   //@@@###$$$%%%***


import React , {Component}from "react";

export class LifeCycle extends Component{
   constructor(props){
    super(props);
    this.state = {
        count : 1,
    };
    console.log("Intialization") ;
   } 


   incrementCount = () =>{
    this.setState((prevState) => ({
        count : prevState.count + 1 ,
    })) ;
   }

//    Life cycles methods =>>
componentDidMount(){
    console.log("component Did Mount") ;
}

componentWillMount(){
    console.log("component Will Mount") ;
}

shouldComponentUpdate(){
    console.log("should component Update") ;
// if return is false then value not increases , you can check
    return true ;
}

   render(){
    console.log("Rendering") ;
    return(
        <>
        <p>count = {this.state.count}</p>
        <button onClick={this.incrementCount}>increment</button>
        {this.state.count > 5 && <h1>Hello Prakash </h1>}
        </>
    ) ;
   }
}

////@@@###$$$%%%***  19-September sessions , Sir Disscuss the Life-Cycle method Please watch Once more .   //@@@###$$$%%%***
// There are 4 phases in Life Cycle method (for detail , see 19-September sessions)
// (1) =>  Intialization
// (2) =>  Mounting
// (3) =>  Updation
// (4) =>  Un-Mounting