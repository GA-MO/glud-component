import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class Row extends Component {
  static propTypes = {
    centered: PropTypes.bool,
    right: PropTypes.bool,
    justified: PropTypes.bool,
    noGutter: PropTypes.bool,
    className: PropTypes.string
  }

  render () {
    const {
      centered,
      right,
      justified,
      noGutter,
      className,
      children
    } = this.props

    const classes = classNames('row', {
      [className]: className,
      'no-gutter': noGutter,
      'columns-center': centered,
      'columns-right': right,
      'columns-between': justified
    })

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}
