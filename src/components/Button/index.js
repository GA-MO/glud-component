import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Button extends React.PureComponent {
  static propTypes = {
    testID: PropTypes.string,
    title: PropTypes.string,
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
    tooltip: PropTypes.string,
    tooltipMultiline: PropTypes.bool,
    tooltipLeft: PropTypes.bool,
    tooltipRight: PropTypes.bool,
    tooltipBottom: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    testID: 'button'
  }

  render () {
    const {
      testID,
      title,
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
      tooltip,
      tooltipMultiline,
      tooltipLeft,
      tooltipRight,
      tooltipBottom,
      onClick,
      children
    } = this.props

    const classes = classNames('button', {
      tooltip: tooltip,
      'is-tooltip-multiline': tooltipMultiline,
      'is-tooltip-right': tooltipRight,
      'is-tooltip-left': tooltipLeft,
      'is-tooltip-bottom': tooltipBottom,
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
        data-test-id={testID}
        data-tooltip={tooltip}
        className={classes}
        disabled={disabled}
        onClick={onClick}
        title={title}
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
