import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Checkbox from '../Checkbox'

export default class Radio extends Component {
  static propTypes = {
    labelGroup: PropTypes.string,
    name: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    inline: PropTypes.bool,
    options: PropTypes.array.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
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
    const sValue = this.state.value
    const value = this.props.value
    const currentValue = sValue !== '' ? sValue : value
    return currentValue === optionValue
  }

  renderRadio = option => (
    <span key={option.value}>
      <input
        type='radio'
        className='is-checkradio is-primary'
        name={this.props.name}
        checked={this.isChecked(option.value)}
        readOnly='readOnly'
        disabled={option.disabled}
      />
      <label
        onClick={() =>
          (option.disabled ? null : this.handleRadioClick(option.value))}
      >
        {option.label}
      </label>
    </span>
  )

  renderRadioOptions = () => {
    const { inline, options } = this.props

    if (inline) return options.map(option => this.renderRadio(option))

    return options.map((option, i) => (
      <div key={i} className='box-field'>
        {this.renderRadio(option)}
      </div>
    ))
  }

  render () {
    const { labelGroup, isRequired } = this.props

    return (
      <div className='field'>
        {labelGroup &&
          <label className='label'>
            {labelGroup}
            {' '}
            {isRequired && <i className='required fas fa-asterisk' />}
          </label>}
        {this.renderRadioOptions()}
      </div>
    )
  }
}
