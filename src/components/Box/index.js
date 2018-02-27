import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class Box extends Component {
  static propTypes = {
    onlyContain: PropTypes.bool,
    className: PropTypes.string
  }

  render () {
    const { className, onlyContain } = this.props
    const classes = classNames('box', {
      'only-contain': onlyContain
    }, className)

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}
