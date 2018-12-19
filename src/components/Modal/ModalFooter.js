import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class ModalFooter extends Component {
  static propTypes = {
    centered: PropTypes.bool,
    right: PropTypes.bool
  }

  render () {
    const { centered, right, children } = this.props
    const classes = classNames('modal-card-foot', {
      'is-centered': centered,
      'is-right': right
    })

    return <footer className={classes}>{children}</footer>
  }
}
