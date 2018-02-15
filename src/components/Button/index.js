import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Button extends React.PureComponent {
  static propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    fullwidth: PropTypes.bool,
    large: PropTypes.bool,
    medium: PropTypes.bool,
    small: PropTypes.bool,
    loading: PropTypes.bool,
    active: PropTypes.bool,
    outlined: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    onClick: PropTypes.func
  }

  render () {
    const {
      primary,
      secondary,
      fullwidth,
      large,
      medium,
      small,
      loading,
      active,
      outlined,
      disabled,
      icon,
      onClick,
      children
    } = this.props

    const classes = classNames('button', {
      'is-primary': primary,
      'is-dark': secondary,
      'is-large': large,
      'is-medium': medium,
      'is-outlined': outlined,
      'is-small': small,
      'is-active': active,
      'is-loading': loading,
      'is-fullwidth': fullwidth
    })

    return (
      <button className={classes} disabled={disabled} onClick={onClick}>
        {icon ? <Icon icon={icon} /> : null}
        {icon && children ? <span>{children}</span> : children}
      </button>
    )
  }
}

class Icon extends React.PureComponent {
  render () {
    const { icon } = this.props
    return (
      <span className='icon'>
        <i className={icon} />
      </span>
    )
  }
}
