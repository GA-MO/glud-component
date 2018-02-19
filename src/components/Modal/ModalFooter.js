import React, { Component } from 'react'

export default class ModalFooter extends Component {
  render () {
    const { children } = this.props
    return (
      <footer className='modal-card-foot'>
        {children}
      </footer>
    )
  }
}
