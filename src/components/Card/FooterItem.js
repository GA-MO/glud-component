import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CardFooterItem extends Component {
  static propTypes = {
    testID: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    testID: 'card-action'
  }

  render () {
    const { testID, children, onClick } = this.props
    return (
      <a
        data-test-id={testID}
        href='javascript:;'
        className='card-footer-item has-text-grey-dark'
        onClick={onClick}
      >
        {children}
      </a>
    )
  }
}
