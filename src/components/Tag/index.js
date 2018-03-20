import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Tag extends React.PureComponent {
  static propTypes = {
    danger: PropTypes.bool,
    dark: PropTypes.bool,
    warning: PropTypes.bool,
    large: PropTypes.bool,
    medium: PropTypes.bool,
    success: PropTypes.bool,
    light: PropTypes.bool,
    info: PropTypes.bool,
    rounded: PropTypes.bool,
    isDelete: PropTypes.bool,
    onClick: PropTypes.func
  }

  render () {
    const {
      danger,
      dark,
      warning,
      large,
      medium,
      success,
      light,
      info,
      rounded,
      isDelete,
      onClick,
      children
    } = this.props

    const classes = classNames('tag', {
      'is-danger': danger,
      'is-dark': dark,
      'is-large': large,
      'is-medium': medium,
      'is-info': info,
      'is-light': light,
      'is-success': success,
      'is-warning': warning,
      'is-rounded': rounded,
      'is-delete': isDelete
    })

    return <span className={classes} onClick={onClick}>{children}</span>
  }
}
