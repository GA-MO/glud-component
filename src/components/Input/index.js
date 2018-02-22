import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Input extends PureComponent {
  static propTypes = {
    onlyContain: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    isRequired: PropTypes.bool,
    isSuccess: PropTypes.bool,
    isError: PropTypes.bool,
    message: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onKeyPress: PropTypes.func,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    loading: PropTypes.bool,
    iconLeft: PropTypes.func,
    iconRight: PropTypes.func
  }

  render () {
    const {
      onlyContain,
      label,
      name,
      value,
      isRequired,
      isSuccess,
      isError,
      message,
      placeholder,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      onKeyUp,
      onKeyPress,
      disabled,
      readOnly,
      loading,
      iconLeft,
      iconRight
    } = this.props

    const status = {
      'is-success': isSuccess,
      'is-danger': isError
    }

    const classInput = classNames('input', status)
    const classHelp = classNames('help', status)
    const classControl = classNames('control', {
      'is-loading': loading,
      'has-icons-left': iconLeft,
      'has-icons-right': iconRight
    })

    const inputField = (
      <input
        className={classInput}
        type='text'
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onKeyPress={onKeyPress}
        disabled={disabled}
        readOnly={readOnly}
      />
    )

    let iconL = null
    if (iconLeft) {
      iconL = (
        <span className='icon is-left'>
          {iconLeft()}
        </span>
      )
    }

    let iconR = null
    if (iconRight) {
      iconR = (
        <span className='icon is-right'>
          {iconRight()}
        </span>
      )
    }

    if (onlyContain) {
      return (
        <div className={classControl}>
          {inputField}
          {iconL}
          {iconR}
        </div>
      )
    }

    return (
      <div className='field'>
        <label className='label'>{label} {isRequired && <i className='required fas fa-asterisk' />}</label>
        <div className={classControl}>
          {inputField}
          {iconL}
          {iconR}
        </div>
        {message && <p className={classHelp}>{message}</p>}
      </div>
    )
  }
}
