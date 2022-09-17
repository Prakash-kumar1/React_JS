import React, { Component } from 'react'

export default class Person2 extends Component {
  render() {
    let {name , count , decrease} = this.props
    return (
      <div>
        <button onClick={decrease}>minus </button>
        Hi , I am Person2 with {name} and {count}
      </div>
    )
  }
}
