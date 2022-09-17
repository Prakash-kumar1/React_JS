import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class Person extends Component {
  render() {
    let {name , count , increase} = this.props
    return (
      <div>
        
        {/* <button onClick={increase} >Plus</button> */}

        {/* Using React-Bootstarp */}
        <Button onClick={increase}   variant="success" >Plus</Button>

        Hello Everyone Person , {name} = {count}
    </div>
    )
  }
}
