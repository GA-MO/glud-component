import React, { Component } from 'react'

export default class CardContent extends Component {
  render () {
    return (
      <footer className='card-content'>
        {this.props.children}
      </footer>
    )
  }
}
