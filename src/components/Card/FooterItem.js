import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CardFooterItem extends Component {
  static propTypes = {
    testKey: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    testKey: 'card-action'
  }

  render () {
    const { testKey, children, onClick } = this.props
    return (
      <a
        data-test={testKey}
        href='javascript:;'
        className='card-footer-item has-text-grey-dark'
        onClick={onClick}
      >
        {children}
      </a>
    )
  }
}
