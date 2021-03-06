import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Select extends Component {
  static propTypes = {
    testID: PropTypes.string,
    className: PropTypes.string,
    onlyContain: PropTypes.bool,
    inline: PropTypes.bool,
    name: PropTypes.string,
    label: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.shape(), PropTypes.array]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isRequired: PropTypes.bool,
    isSuccess: PropTypes.bool,
    isError: PropTypes.bool,
    message: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    iconLeft: PropTypes.func,
    options: PropTypes.array
  }

  static defaultProps = {
    testID: 'select',
    options: [
      {
        label: 'Select dropdown',
        value: 0
      },
      {
        label: 'Option 1',
        value: 1
      }
    ]
  }

  render () {
    const {
      testID,
      className,
      onlyContain,
      inline,
      name,
      label,
      defaultValue,
      value,
      isRequired,
      isSuccess,
      isError,
      message,
      onChange,
      onFocus,
      onBlur,
      disabled,
      loading,
      iconLeft,
      options
    } = this.props

    const status = {
      'is-success': isSuccess,
      'is-danger': isError,
      'is-loading': loading
    }

    const classSelect = classNames('select', status, {
      inline: inline
    })
    const classHelp = classNames('help', status)
    const classControl = classNames('control', {
      'is-loading': loading,
      'has-icons-left': iconLeft
    })

    const inputField = (
      <div className={classSelect}>
        <select
          name={name}
          data-test-id={testID}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          defaultValue={defaultValue}
          value={value}
          disabled={disabled}
        >
          {options.map((option, i) => (
            <option key={i} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )

    let iconL = null
    if (iconLeft) {
      iconL = <span className='icon is-left'>{iconLeft()}</span>
    }

    if (onlyContain) {
      return (
        <div className={classControl}>
          {inputField}
          {iconL}
        </div>
      )
    }

    return (
      <div className={`field ${className}`}>
        <label className='label'>
          {label} {isRequired && <i className='required fas fa-asterisk' />}
        </label>
        <div className={classControl}>
          {inputField}
          {iconL}
        </div>
        {message && <p className={classHelp}>{message}</p>}
      </div>
    )
  }
}
