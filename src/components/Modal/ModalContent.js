import React, { Component } from 'react'

export default class ModalContent extends Component {
  render () {
    const { children } = this.props
    return (
      <section className='modal-card-body'>
        {children}
      </section>
    )
  }
}
