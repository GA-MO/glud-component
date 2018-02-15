import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TabContent extends PureComponent {
  static propTypes = {
    active: PropTypes.bool
  }

  render () {
    const { children, active } = this.props
    const classes = classnames('tab-content', {
      active: active
    })
    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}
