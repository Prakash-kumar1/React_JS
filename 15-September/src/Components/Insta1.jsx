import React, { Component } from 'react'

export default class Insta1 extends Component {
  render() {
    return (
      <>
        <div className="body">
            <div className="post">
                <div className="profile">
                    {/* <img src={this.props.image} alt="not found" className='proPic'  /> */}
                    <h3 className="heading">{this.props.name}</h3>
                </div>
                <img src={this.props.image} alt="not found" className='posting' />
            </div>
        </div>
      </>
    )
  }
}
