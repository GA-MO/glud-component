import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class ButtonGroup extends React.PureComponent {
  static propTypes = {
    hasAddons: PropTypes.bool,
    centered: PropTypes.bool,
    right: PropTypes.bool,
    fullwidth: PropTypes.bool,
    fullwidthEqualSized: PropTypes.bool
  }

  render () {
    const { hasAddons, centered, right, fullwidth, fullwidthEqualSized, children } = this.props

    const classes = classNames('buttons', {
      'has-addons': hasAddons,
      'is-centered': centered,
      'is-right': right,
      fullwidth: fullwidth || fullwidthEqualSized,
      equal: fullwidthEqualSized
    })

    return <div className={classes}>{children}</div>
  }
}
