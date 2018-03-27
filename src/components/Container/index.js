import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Container extends Component {
  static propTypes = {
    maxWidth: PropTypes.number
  }

  render () {
    const { maxWidth } = this.props
    const styleContainer = maxWidth ? { maxWidth: `${maxWidth}px` } : {}

    return (
      <div className='container' style={styleContainer}>
        {this.props.children}
      </div>
    )
  }
}
