import React, { Component } from 'react'

export default class ControlComp extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            value : " "
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


  render() {
    return (
      <div>
        <form>
            <h2>Contolled by React</h2>
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
            <textarea name="" id="" cols="30" rows="10" value={this.state.value}>Comments</textarea>
        </form>
      </div>
    )
  }
}
