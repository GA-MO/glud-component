import React, { Component } from 'react'

export default class CardFooter extends Component {
  render () {
    return (
      <footer className='card-footer'>
        {this.props.children}
      </footer>
    )
  }
}
