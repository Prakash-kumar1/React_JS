import React, { Component } from 'react'

export default class ControlComp extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            value : " " ,
            value1 : " Hello there , this is some text in text area " ,
            name : "Username" ,
            pwd : " " ,
            city : "state" ,
            email : " " ,
        };
    }


    handleChange =(e) => {
        console.log(e.target.value) ;
        this.setState({value : e.target.value}) ;
// if we want data in capital letter , no matter user write in small letter but we want data in capital letter
        this.setState({value : e.target.value.toUpperCase()}) ;
// if we want to fixed number of characters  
        this.setState({value : e.target.value.toUpperCase().substr(0 , 7)}) ;   //Now , only 6 character prints
    } ;


    handleText = (e) => {
      this.setState({value1 : e.target.value1}) ;

// // if we want to fixed number of characters  or Comments in capital letter
// this.setState({value1 : e.target.value1.substr(0 , 5)}) ;   //Now , only 100 character prints
   }

   handleName = (e) => {
    this.setState({name : e.target.value}) ;
   }

   handlePassword = (e) => {
    this.setState({pwd : e.target.value}) ;
   }

   handleCity = (e) => {
    this.setState({city : e.target.value}) ;
   }

   handleEmail = (e) => {
    this.setState({email: e.target.value}) ;
   }


   handleSubmit = (e) => {
    console.log(e.target) ;
    e.preventDefault() ;
   }



  render() {
    return (
      <div>
 <input type="text" value={this.state.value} onChange={this.handleChange} /> <br />

{/* onSubmit  always use above with form */}

        <form onSubmit={this.handleSubmit}>         

            <h2>Contolled by React</h2>

            <label>Name :</label> <br />
            <input type="text" value={this.state.name} onChange={this.handleName}/> <br /> <br />

            <label>Password :</label> <br />
            <input type="text"  value={this.state.pwd} onChange={this.handlePassword}/> <br /><br />

            <label> Choose your City:</label><br />
            <input type="text"  value={this.state.city} onChange={this.handleCity}/> <br /><br />

            <label> E-mail ID:</label><br />
            <input type="text"  value={this.state.email} onChange={this.handleEmail}/> <br /> <br />
           
            <textarea cols="30" rows="10" value={this.state.value1} onChange={this.handleText} /> <br /> <br />

            <button type="submit" >Log In</button>
        </form>

      </div>

    )
  }
}




