import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Item from './Item'

class InputWithAddons extends Component {
  static propTypes = {
    centered: PropTypes.bool,
    right: PropTypes.bool,
    hasLabelAndMessage: PropTypes.bool,
    className: PropTypes.string
  }

  render () {
    const { className, centered, right, hasLabelAndMessage } = this.props
    const classes = classNames('field has-addons', {
      'has-label-and-message': hasLabelAndMessage,
      'has-addons-centered': centered,
      'has-addons-right': right
    }, className)

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}

InputWithAddons.Item = Item

export default InputWithAddons
