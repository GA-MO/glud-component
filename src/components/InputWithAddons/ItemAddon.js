import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

class ItemAddon extends Component {
  static propTypes = {
    expanded: PropTypes.bool,
    className: PropTypes.string
  }

  render () {
    const { className, expanded } = this.props
    const classes = classNames('control', {
      'is-expanded': expanded
    }, className)

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}

export default ItemAddon
