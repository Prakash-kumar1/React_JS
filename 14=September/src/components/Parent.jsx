// Component is a  In-Built  class which have many methods

import React, {Component} from "react" ;
import { Child } from "./Child" ;
import {Odd} from "./Odd" ;
import {Even} from "./Even" ;

// if i extends this component then Parent become a component . otherwise , Main is just a normal function .

export class Parent extends Component{    
    constructor(props){
      super(props) ;
 // Intialize  the  state  here 
    this.state = {
        parentText : "Default Parent state" ,
        parentObj : {
            name : "Prakash kumar",
            food : "Dosa" ,
            work : "Fronted Developer" ,
        },
        count1 : 0 ,
        count2 : 0 ,
        name : 'Shahrukh Khan' ,
        names: ['Julia' , 'Deepika' , 'Alia' , 'Anushka' , 'Kirti'] ,
        Foods: ['Dosa' , 'idli' , 'Chicken' , 'Mutton' , 'Ice-Cream' , 'Egg-Roll', '' ],
        dress: ['Jeans' , 'T-shirt' , ' ']
    } ;
 }

   changeParentText = () => {   //this is a  function which change parents property
    this.setState({
        parentText : "CHANGED " ,    
    }) ;
   } ;

//    we can change parent data from child But we can't change  child data from Parent that's why 
//   React is called "  one way Binding ."

   changeByChild = () => {   
    this.setState({
        parentText : "Changing parent data by child" ,
    }) ;
   } ;


// Increasing Count value 
changeCount = () =>{
    this.setState((prev) => ({
        count1 : prev.count1 +1 ,
    }));
}

// Decreasing Count value 
decreaseCount = () =>{
    this.setState((prev) => ({
        count2 : prev.count2 -1 ,
    }));
}



    render(){
        console.log("parent") ;  //if i changed my parent component (clicking on parent button)
// all my child will Re-rendered .(see in console)

        return (
// In the place of div , we can use this <> and </> (internally it calls React.fragment)

            <>
        <h1>This is my Parent Component = {this.state.parentText} </h1>
        <button onClick={this.changeParentText}>Parent</button>
        <button onClick={this.changeCount} > Increment = {this.state.count1}   </button>
        <button onClick={this.decreaseCount} > Decrement = {this.state.count2} </button>

        {this.state.count1 % 2 === 0 ? <Even /> : <Odd />}
        {this.state.count1 > 0 && <p className="large">Count is greater than 0</p>}
        {this.state.count2 < 0 && <p className="small">Count is Smaller than 0</p>}


<p>{this.state.name} is a Actor from bollywood</p>

{this.state.names.map(name => <p>{name} is a heronie from boolywood</p>)}

{this.state.Foods.map(food => 
    <div>
<h1>This restaurant have great items</h1>
<p>{food} is present in Restaurant menu .</p>
</div>
)}

{/*  */}
{this.state.dress.map(cloth => 
    cloth.length > 1 && (
<p>I am looking cool in {cloth}</p>
)
)}


        <Child />
{/* passing function itself and got into console */}
        <Child  
         changeByChild={this.changeByChild} 
          lightObj = {this.state.parentObj}       //not working , don't know reason
          />
        </>

        ) ;
    }
}









