import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactSelect from 'react-select'
import AsyncSelect from 'react-select/lib/Async'
import style from './style'
import classNames from 'classnames'

export default class SelectWithFilter extends Component {
  static propTypes = {
    testID: PropTypes.string,
    className: PropTypes.string,
    onlyContain: PropTypes.bool,
    async: PropTypes.bool,
    inline: PropTypes.bool,
    name: PropTypes.string,
    label: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.shape(), PropTypes.array]),
    value: PropTypes.oneOfType([PropTypes.shape(), PropTypes.array]),
    isMulti: PropTypes.bool,
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
      async,
      inline,
      name,
      label,
      value,
      defaultValue,
      isMulti,
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
      inline: inline,
      'is-multi': isMulti
    })
    const classHelp = classNames('help', status)
    const classControl = classNames('control', {
      'is-loading': loading,
      'has-icons-left': iconLeft
    })

    const SelectComponent = async ? AsyncSelect : ReactSelect

    const inputField = (
      <div className={classSelect} data-test-id={testID}>
        <SelectComponent
          classNamePrefix='react-select'
          name={name}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          defaultValue={defaultValue}
          isDisabled={disabled}
          options={options}
          styles={style(this.props)}
          isOptionDisabled={option => option.disabled}
          {...this.props}
        />
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
