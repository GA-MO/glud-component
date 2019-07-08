import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class TextArea extends PureComponent {
  static propTypes = {
    testID: PropTypes.string,
    className: PropTypes.string,
    onlyContain: PropTypes.bool,
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    maxLength: PropTypes.number,
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
    loading: PropTypes.bool
  }

  static defaultProps = {
    testID: 'textarea',
    rows: 4
  }

  render () {
    const {
      testID,
      className,
      onlyContain,
      label,
      defaultValue,
      value,
      maxLength,
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
      rows
    } = this.props

    const status = {
      'is-success': isSuccess,
      'is-danger': isError
    }

    const classInput = classNames('textarea', status)
    const classHelp = classNames('help', status)
    const classControl = classNames('control', {
      'is-loading': loading
    })

    const inputField = (
      <textarea
        data-test-id={testID}
        className={classInput}
        defaultValue={defaultValue}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onKeyPress={onKeyPress}
        disabled={disabled}
        readOnly={readOnly}
        rows={rows}
      />
    )

    if (onlyContain) {
      return <div className={classControl}>{inputField}</div>
    }

    return (
      <div className={`field ${className}`}>
        <label className='label'>
          {label} {isRequired && <i className='required fas fa-asterisk' />}
        </label>
        <div className={classControl}>{inputField}</div>
        {message && <p className={classHelp}>{message}</p>}
      </div>
    )
  }
}
