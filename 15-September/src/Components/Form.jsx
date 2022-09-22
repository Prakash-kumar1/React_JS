//@@@###$$$%%%   21-September Sessions   @@@###$$$%%%


import React, { Component } from 'react' ;

export default class Form extends Component {
    // constructor(props){
    //     super(props) ;
    // }


  render() {
    return (
      <>
      <Form>

        <label htmlFor="email">E-mail</label>
        <button type='text' name='email' id='email' />
        <label htmlFor="pwd">password</label>
        <button type='text' name='password' id='pwd' />
        
      </Form>
      </>
    ) ;
  }
}
