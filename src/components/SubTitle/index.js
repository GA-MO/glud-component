import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class SubTitle extends Component {
  static propTypes = {
    size: PropTypes.number,
    className: PropTypes.string
  }

  render () {
    const { size, className } = this.props
    const classes = classNames('subtitle', {
      [`is-${size}`]: size
    }, className)

    return <h1 className={classes}>{this.props.children}</h1>
  }
}
