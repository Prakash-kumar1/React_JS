import React, { Component } from 'react'

export default class Person extends Component {
  render() {
    let {name , count} = this.props
    return (
      <div>
        Hello Everyone Person , {name} = {count}
    {/* {this.props.name} = {this.props.count} */}
    </div>
    )
  }
}
