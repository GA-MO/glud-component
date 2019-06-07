import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ButtonGroup from '../ButtonGroup'
import Button from '../Button'

export default class RadioButton extends PureComponent {
  static propTypes = {
    testID: PropTypes.string,
    onlyContain: PropTypes.bool,
    fullwidth: PropTypes.bool,
    fullwidthEqualSized: PropTypes.bool,
    labelGroup: PropTypes.string,
    isRequired: PropTypes.bool,
    options: PropTypes.array.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func
  }

  static defaultProps = {
    testID: 'radio-button',
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

  isChecked = optionValue => {
    const sValue = this.state.value
    const value = this.props.value
    const currentValue = sValue !== '' ? sValue : value
    return currentValue === optionValue
  }

  handleButtonClick = value => {
    this.setState({
      value
    })
    this.props.onChange(value)
  }

  renderRadio = (option, index) => (
    <Button
      key={option.value}
      testID={`${this.props.testID}-${index}`}
      primary={this.isChecked(option.value)}
      disabled={option.disabled}
      onClick={() => this.handleButtonClick(option.value)}
    >
      {option.label}
    </Button>
  )

  renderRadioOptions = () => {
    const { options } = this.props
    return options.map((option, index) => this.renderRadio(option, index))
  }

  render () {
    const { onlyContain, labelGroup, isRequired, fullwidth, fullwidthEqualSized } = this.props

    if (onlyContain) {
      return <ButtonGroup hasAddons>{this.renderRadioOptions()}</ButtonGroup>
    }

    return (
      <div className='field'>
        {labelGroup && (
          <label className='label'>
            {labelGroup} {isRequired && <i className='required fas fa-asterisk' />}
          </label>
        )}
        <ButtonGroup hasAddons fullwidth={fullwidth} fullwidthEqualSized={fullwidthEqualSized}>
          {this.renderRadioOptions()}
        </ButtonGroup>
      </div>
    )
  }
}
