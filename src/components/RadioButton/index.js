import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ButtonGroup from '../ButtonGroup'
import Button from '../Button'

export default class RadioButton extends PureComponent {
  static propTypes = {
    onlyContain: PropTypes.bool,
    fullwidth: PropTypes.bool,
    labelGroup: PropTypes.string,
    isRequired: PropTypes.bool,
    options: PropTypes.array.isRequired,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
      .isRequired,
    onChange: PropTypes.func
  }

  static defaultProps = {
    inline: false,
    options: [],
    value: [],
    onChange: (value) => null
  }

  state = {
    value: ''
  }

  componentDidMount = () => {
    this.setState(() => ({
      value: this.props.value
    }))
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState(() => ({
      value: nextProps.value
    }))
  }

  isChecked = (optionValue) => {
    const sValue = this.state.value
    const value = this.props.value
    const currentValue = sValue !== '' ? sValue : value
    return currentValue === optionValue
  }

  handleButtonClick = (value) => {
    this.setState({
      value
    })
    this.props.onChange(value)
  }

  renderRadio = (option) => (
    <Button
      key={option.value}
      data-test={option.testKey}
      primary={this.isChecked(option.value)}
      disabled={option.disabled}
      onClick={() => this.handleButtonClick(option.value)}
    >
      {option.label}
    </Button>
  )

  renderRadioOptions = () => {
    const { options } = this.props
    return options.map((option) => this.renderRadio(option))
  }

  render () {
    const { onlyContain, labelGroup, isRequired, fullwidth } = this.props

    if (onlyContain) {
      return <ButtonGroup hasAddons>{this.renderRadioOptions()}</ButtonGroup>
    }

    return (
      <div className='field'>
        {labelGroup && (
          <label className='label'>
            {labelGroup}{' '}
            {isRequired && <i className='required fas fa-asterisk' />}
          </label>
        )}
        <ButtonGroup hasAddons fullwidth={fullwidth}>
          {this.renderRadioOptions()}
        </ButtonGroup>
      </div>
    )
  }
}
