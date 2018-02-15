import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TabItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    active: PropTypes.bool,
    index: PropTypes.number,
    onClick: PropTypes.func
  }

  render () {
    const { title, active, index, onClick } = this.props
    const classes = classnames('', {
      'is-active': active
    })
    return (
      <li className={classes} onClick={() => onClick(index + 1)}>
        <a>{title}</a>
      </li>
    )
  }
}
