import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CardFooterItem extends Component {
  static propTypes = {
    onClick: PropTypes.func
  }

  render () {
    const { children, onClick } = this.props
    return (
      <a href='#' className='card-footer-item' onClick={onClick}>{children}</a>
    )
  }
}
