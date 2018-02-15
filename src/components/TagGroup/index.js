import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class TagGroup extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render () {
    const { className } = this.props
    const classes = classNames('tags', className)

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}
