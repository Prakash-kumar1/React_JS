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

componentWillMount(){
    console.log("component Will Mount") ;
}


componentDidMount(){
    console.log("component Did Mount") ;
}


shouldComponentUpdate(){
    console.log("should component Update") ;
// if return is false then value not increases , you can check
    return true ;
}


componentWillUpdate(){
    console.log("component Will Update") ;
}


componentDidUpdate(){
    console.log("component Did Update") ;
}


// Removing  element from The UI
componentWillUnmount(){
    console.log("component Will removed") ;
// on Refreshing the page you can see
    alert("in Un-Mounting phase")
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