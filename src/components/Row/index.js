import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class Row extends Component {
  static propTypes = {
    centered: PropTypes.bool,
    right: PropTypes.bool,
    justified: PropTypes.bool
  }

  render () {
    const {
      centered,
      right,
      justified,
      children
    } = this.props

    const classes = classNames('row', {
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
