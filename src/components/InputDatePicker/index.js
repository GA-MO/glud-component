import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import DateRangePicker from '../InputDateRangePicker/react-daterange-picker'
import Input from '../Input'
import moment from 'moment'
import customTyeps from '../InputDateRangePicker/customTyeps-util'

export default class InputDatePicker extends Component {
  static propTypes = {
    testID: PropTypes.string,
    onlyContain: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    isRequired: PropTypes.bool,
    isSuccess: PropTypes.bool,
    isError: PropTypes.bool,
    message: PropTypes.string,
    disabled: PropTypes.bool,
    format: PropTypes.string,
    value: PropTypes.oneOfType([customTyeps.moment, PropTypes.oneOf([null])]),
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    maximumDate: PropTypes.instanceOf(Date),
    minimumDate: PropTypes.instanceOf(Date)
  }

  static defaultProps = {
    testID: 'input-date-picker',
    format: 'DD/MM/YYYY',
    onChange: () => null,
    onFocus: () => null,
    value: moment()
  }

  state = {
    isShowCalendar: false,
    dateValue: null
  }

  componentDidMount = () => {
    this.setState({
      dateValue: this.props.value
    })
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      dateValue: nextProps.value
    })
  }

  handleInputFocus = e => {
    this.onShowDatePicker()
    this.props.onFocus(e)
    this.input.blur()
  }

  handleClickCloseDatePicker = () => {
    this.onCloseDatePicker()
  }

  handSelectDate = dateValue => {
    this.setState({
      dateValue
    })
    this.props.onChange(dateValue)
    this.onCloseDatePicker()
  }

  onShowDatePicker = () => {
    this.setState(prevState => ({
      isShowCalendar: true
    }))
  }

  onCloseDatePicker = () => {
    this.setState(prevState => ({
      isShowCalendar: false
    }))
  }

  render () {
    const { isShowCalendar, dateValue } = this.state
    const {
      testID,
      onlyContain,
      label,
      name,
      isRequired,
      isSuccess,
      isError,
      message,
      format,
      disabled,
      minimumDate,
      maximumDate
    } = this.props

    return (
      <Fragment>
        <Input
          data-test-id={testID}
          ref={input => (this.input = input)}
          onlyContain={onlyContain}
          label={label}
          name={name}
          isRequired={isRequired}
          isSuccess={isSuccess}
          isError={isError}
          disabled={disabled}
          message={message}
          onFocus={this.handleInputFocus}
          value={dateValue ? dateValue.format(format) : ''}
          iconRight={() => <i className='fas fa-calendar' />}
        />
        {isShowCalendar && (
          <div className='box-datarange-wrapper show'>
            <a
              data-test-id={`${testID}-close-button`}
              className='delete'
              onClick={this.handleClickCloseDatePicker}
            />
            <DateRangePicker
              numberOfCalendars={1}
              selectionType='single'
              initialFromValue
              minimumDate={minimumDate}
              maximumDate={maximumDate}
              value={dateValue}
              onSelect={this.handSelectDate}
            />
          </div>
        )}
      </Fragment>
    )
  }
}
