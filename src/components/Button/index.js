import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Button extends React.PureComponent {
  static propTypes = {
    testKey: PropTypes.string,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    isStatic: PropTypes.bool,
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

  static defaultProps = {
    testKey: 'button'
  }

  render () {
    const {
      testKey,
      primary,
      secondary,
      isStatic,
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
      'is-static': isStatic,
      'is-large': large,
      'is-medium': medium,
      'is-outlined': outlined,
      'is-small': small,
      'is-active': active,
      'is-loading': loading,
      'is-fullwidth': fullwidth
    })

    return (
      <button
        data-test={testKey}
        className={classes}
        disabled={disabled}
        onClick={onClick}
      >
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
