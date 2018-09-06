import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Checkbox from '../Checkbox'

export default class CheckboxGroup extends Component {
  static propTypes = {
    labelGroup: PropTypes.string,
    isRequired: PropTypes.bool,
    inline: PropTypes.bool,
    options: PropTypes.array.isRequired,
    value: PropTypes.array.isRequired,
    onChange: PropTypes.func
  }

  static defaultProps = {
    inline: false,
    options: [],
    value: [],
    onChange: (values) => null
  }

  state = {
    values: []
  }

  componentDidMount = () => {
    const { options, value } = this.props
    this.setState(() => ({
      values: this.getOptionIsChecked(options, value)
    }))
  }

  componentWillReceiveProps = (nextProps) => {
    const { options, value } = nextProps
    this.setState(() => ({
      values: this.getOptionIsChecked(options, value)
    }))
  }

  isOptionChecked = (value, currentValue) => {
    if (value.value) return value.value === currentValue
    return value === currentValue
  }

  isChecked = (currentValue) => {
    const { values } = this.state
    const { value } = this.props
    const valueChecked = values.length > 0 ? values : value
    return valueChecked.some((item) => this.isOptionChecked(item, currentValue))
  }

  getOptionIsChecked = (options, value) => {
    return options.filter((item) => value.some((v) => v === item.value))
  }

  handleCheckboxChange = (option, isChecked) => {
    const { values } = this.state

    if (isChecked) {
      const nextValues = [ ...values, option ]
      this.updateValues(nextValues)
      return true
    }

    const nextValues = values.filter((item) => item.value !== option.value)
    this.updateValues(nextValues)
  }

  updateValues = (nextValues) => {
    this.setState(() => ({
      values: nextValues
    }))
    this.props.onChange(nextValues)
  }

  renderCheckbox = (option) => (
    <Checkbox
      testKey={option.testKey}
      name={option.name}
      key={option.value}
      label={option.label}
      value={option.value}
      disabled={option.disabled}
      checked={this.isChecked(option.value)}
      onChange={(isChecked) => this.handleCheckboxChange(option, isChecked)}
    />
  )

  renderCheckboxOptions = () => {
    const { inline, options } = this.props

    if (inline) return options.map((option) => this.renderCheckbox(option))

    return options.map((option, i) => (
      <div key={i} className='box-field'>
        {this.renderCheckbox(option)}
      </div>
    ))
  }

  render () {
    const { labelGroup, isRequired } = this.props
    return (
      <div className='field'>
        {labelGroup && (
          <label className='label'>
            {labelGroup}{' '}
            {isRequired && <i className='required fas fa-asterisk' />}
          </label>
        )}
        {this.renderCheckboxOptions()}
      </div>
    )
  }
}
