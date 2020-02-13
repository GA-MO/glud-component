import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Checkbox from '../Checkbox'

export default class Radio extends Component {
  static propTypes = {
    className: PropTypes.string,
    labelGroup: PropTypes.string,
    name: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    inline: PropTypes.bool,
    options: PropTypes.array.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /**
     * Only work with onlyContain
     */
    disabled: PropTypes.bool,
    /**
     * Only work with onlyContain
     */
    checked: PropTypes.bool,
    onlyContain: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    inline: false,
    options: [],
    value: [],
    onChange: value => null
  }

  state = {
    value: ''
  }

  componentDidMount = () => {
    this.setState(() => ({
      value: this.props.value
    }))
  }

  componentWillReceiveProps = nextProps => {
    this.setState(() => ({
      value: nextProps.value
    }))
  }

  handleRadioClick = value => {
    const { onChange } = this.props
    this.setState(prevState => ({ value }))
    onChange(value)
  }

  isChecked = optionValue => {
    if (this.props.onlyContain) {
      if (this.props.checked) return true
      return false
    }

    const sValue = this.state.value
    const value = this.props.value
    const currentValue = sValue !== '' ? sValue : value
    return currentValue === optionValue
  }

  renderRadio = (option = {}, index = 0) => {
    const { label = '', value = '' } = option
    const { onlyContain, disabled } = this.props
    const isDisabled = () => {
      if (onlyContain) {
        if (disabled) return true
        return false
      }

      return option.disabled
    }

    return (
      <span key={!onlyContain && value}>
        <input
          type='radio'
          className={`is-checkradio is-primary ${onlyContain && 'only-contain'}`}
          name={this.props.name}
          checked={this.isChecked(value)}
          readOnly='readOnly'
          disabled={isDisabled()}
        />
        <label
          data-test-id={`${this.props.name}-${index}`}
          onClick={() => (isDisabled() ? null : this.handleRadioClick(value))}
        >
          {!onlyContain && label}
        </label>
      </span>
    )
  }

  renderRadioOptions = () => {
    const { inline, options } = this.props

    if (inline) return options.map((option, index) => this.renderRadio(option, index))

    return options.map((option, index) => (
      <div key={index} className='box-field'>
        {this.renderRadio(option, index)}
      </div>
    ))
  }

  render () {
    const { className, onlyContain, labelGroup, isRequired } = this.props

    if (onlyContain) return this.renderRadio()

    return (
      <div className={`field ${className}`}>
        {labelGroup && (
          <label className='label'>
            {labelGroup} {isRequired && <i className='required fas fa-asterisk' />}
          </label>
        )}
        {this.renderRadioOptions()}
      </div>
    )
  }
}
