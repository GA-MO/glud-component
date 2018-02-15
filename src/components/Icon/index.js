import React, { PureComponent } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class Icon extends PureComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  render () {
    const { icon, className } = this.props
    const classes = classNames(icon, className)

    return (
      <div className='icon'>
        <i className={classes} />
      </div>
    )
  }
}
