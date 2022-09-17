import React, { Component } from 'react'

export default class Person2 extends Component {
  render() {
    let {name , count , increase} = this.props
    return (
      <div>
        <button onClick={increase}>minus </button>
        Hi , I am Person2 with {name} and {count}
      </div>
    )
  }
}
