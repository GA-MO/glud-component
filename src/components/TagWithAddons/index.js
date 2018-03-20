import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

class TagWithAddons extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render () {
    const { className } = this.props
    const classes = classNames('tags has-addons', {}, className)

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}

export default TagWithAddons
