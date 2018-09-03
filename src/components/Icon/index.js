import React, { PureComponent } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class Icon extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  render () {
    const { title, icon, className } = this.props
    const classes = classNames(icon, className)

    return (
      <div className='icon'>
        <i title={title} className={classes} />
      </div>
    )
  }
}
