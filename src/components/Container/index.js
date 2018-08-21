import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class Container extends Component {
  static propTypes = {
    maxWidth: PropTypes.number,
    className: PropTypes.string
  }

  render () {
    const { maxWidth, className } = this.props
    const styleContainer = maxWidth ? { maxWidth: `${maxWidth}px` } : {}
    const classes = classNames('container', {
      [className]: className
    })

    return (
      <div className={classes} style={styleContainer}>
        {this.props.children}
      </div>
    )
  }
}
