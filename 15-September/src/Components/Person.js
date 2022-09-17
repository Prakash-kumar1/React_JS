import React, { Component } from 'react'


export default class Person extends Component {
  render() {
    let {name , count , increase} = this.props
    return (
      <div>
        <button onClick={increase}>Plus</button>
        Hello Everyone Person , {name} = {count}
    </div>
    )
  }
}
