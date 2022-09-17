import React, { Component } from 'react'

export default class Person extends Component {
  render() {
    return (
      <div>Hello Everyone Person , {this.props.name}</div>
    )
  }
}
