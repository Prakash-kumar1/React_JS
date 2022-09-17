import React, { Component } from 'react'

export default class Person2 extends Component {
  render() {
    let {name , count} = this.props
    return (
      <div>Hi , I am Person2 with {name} and {count}</div>
    )
  }
}
