import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class Box extends Component {
  static propTypes = {
    onlyContain: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func
  }

  render () {
    const { className, onlyContain, onClick } = this.props
    const classes = classNames(
      'box',
      {
        'only-contain': onlyContain,
        'has-clicked': onClick
      },
      className
    )

    return (
      <div className={classes} onClick={onClick}>
        {this.props.children}
      </div>
    )
  }
}
