import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CardFooterItem extends Component {
  static propTypes = {
    onClick: PropTypes.func
  }

  render () {
    const { children, onClick } = this.props
    return (
      <a href='javascript:;' className='card-footer-item has-text-grey-dark' onClick={onClick}>{children}</a>
    )
  }
}
