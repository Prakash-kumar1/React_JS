//@@@###$$$%%%   21-September Sessions (Again Watch Session)  @@@###$$$%%%
// Topics  ==>>  Controlled  and  UnControlled  component ,  Error-Boundaries

import React, { Component } from 'react' ;

export default class Form extends Component {
    constructor(props){
        super(props) ;
        this.state = {
          email : " default " ,
          password : " " ,
        }
    }



    handleEmail = (event) => {
      console.log(event.target.value) ;
      this.setState = ({
        email : event.target.value,
      })
      console.log("changing the state in render" , this.state.email )
    } ;



  render() {
    return (
      <>
      <form>
        <div>
        <label htmlFor="email">E-mail</label>
        <input type='text' name='email' id='email'
        onChange={this.handleEmail} value={this.state.email}/>
        </div>
<br />
        <div>
        <label htmlFor="pwd">password</label>
        <input type='text' name='password' id='pwd' value={this.state.password}/>
        </div>
        
      </form>
      </>
    ) ;
  }
}
