import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Cleave from 'cleave.js'

export default class Input extends PureComponent {
  static propTypes = {
    testID: PropTypes.string,
    className: PropTypes.string,
    onlyContain: PropTypes.bool,
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * Using Cleave.js https://github.com/nosir/cleave.js/blob/master/doc/options.md
     */
    formatOptions: PropTypes.shape({}),
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
    loading: PropTypes.bool,
    iconLeft: PropTypes.func,
    iconRight: PropTypes.func,
    large: PropTypes.bool,
    medium: PropTypes.bool,
    small: PropTypes.bool
  }

  static defaultProps = {
    testID: 'input',
    type: 'text',
    onChange: () => null,
    onFocus: () => null,
    onBlur: () => null,
    onKeyDown: () => null,
    onKeyUp: () => null,
    onKeyPress: () => null
  }

  blur = () => {
    this.input.blur()
  }

  focus = () => {
    this.input.focus()
  }

  getInput = () => this.input

  componentDidMount = () => {
    const { formatOptions, onChange } = this.props
    if (formatOptions) {
      const options = {
        ...formatOptions,
        onValueChanged: onChange
      }
      this.cleave = new Cleave(this.input, options)
    }
  }

  componentWillUnmount = () => {
    const { formatOptions } = this.props
    if (formatOptions) {
      this.cleave.destroy()
    }
  }

  render () {
    const {
      testID,
      className,
      onlyContain,
      type,
      label,
      name,
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
      iconLeft,
      iconRight,
      large,
      medium,
      small
    } = this.props

    const status = {
      'is-success': isSuccess,
      'is-danger': isError,
      'is-large': large,
      'is-medium': medium,
      'is-small': small
    }

    const classInput = classNames('input', status)
    const classHelp = classNames('help', status)
    const classControl = classNames(
      'control',
      {
        'is-loading': loading,
        'has-icons-left': iconLeft,
        'has-icons-right': iconRight
      },
      className
    )

    const inputField = (
      <input
        data-test-id={testID}
        ref={input => (this.input = input)}
        className={classInput}
        type={type}
        name={name}
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
      />
    )

    let iconL = null
    if (iconLeft) {
      iconL = <span className='icon is-left'>{iconLeft()}</span>
    }

    let iconR = null
    if (iconRight) {
      iconR = <span className='icon is-right'>{iconRight()}</span>
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
        <label className='label'>
          {label} {isRequired && <i className='required fas fa-asterisk' />}
        </label>
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
