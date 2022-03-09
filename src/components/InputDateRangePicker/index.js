import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import DateRangePicker from './react-daterange-picker'
import get from 'lodash/get'
import Input from '../Input'
// import Moment from 'moment'
// import { extendMoment } from 'moment-range'
import customTyeps from './customTyeps-util'

// const moment = extendMoment(Moment)

export default class InputDateRangePicker extends Component {
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
    value: PropTypes.oneOfType([customTyeps.momentRange, PropTypes.oneOf([null])]),
    onChange: PropTypes.func,
    onSelectStart: PropTypes.func,
    onFocus: PropTypes.func,
    maximumDate: PropTypes.instanceOf(Date),
    minimumDate: PropTypes.instanceOf(Date)
  }

  static defaultProps = {
    testID: 'input-date-picker-range',
    format: 'DD/MM/YYYY',
    onChange: () => null,
    onSelectStart: () => null,
    onFocus: () => null,
    value: null
  }

  state = {
    isShowCalendar: false,
    dateRangeValue: null
  }

  componentDidMount = () => {
    this.setState({
      dateRangeValue: this.props.value
    })
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      dateRangeValue: nextProps.value,
      start: null
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

  handSelectDate = dateRangeValue => {
    this.props.onChange(dateRangeValue)

    if (this.props.value === null) {
      this.setState({
        dateRangeValue
      })
    }

    this.onCloseDatePicker()
  }

  handSelectStartDate = startDateValue => {
    this.props.onSelectStart(startDateValue)
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
    const { isShowCalendar, dateRangeValue } = this.state
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

    const startDate = get(dateRangeValue, 'start', null)
    const endDate = get(dateRangeValue, 'end', null)
    const value = dateRangeValue ? `${startDate.format(format)} - ${endDate.format(format)}` : ''

    const datePickerRenderer = (
      <Fragment>
        {isShowCalendar && (
          <div className='box-datarange-wrapper show'>
            <a
              data-test-id={`${testID}-close-button`}
              className='delete'
              onClick={this.handleClickCloseDatePicker}
            />
            <DateRangePicker
              numberOfCalendars={2}
              selectionType='range'
              singleDateRange
              initialFromValue
              minimumDate={minimumDate}
              maximumDate={maximumDate}
              value={dateRangeValue}
              onSelect={this.handSelectDate}
              onSelectStart={this.handSelectStartDate}
            />
          </div>
        )}
      </Fragment>
    )

    return (
      <Fragment>
        <Input
          testID={testID}
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
          value={value}
          iconRight={() => <i className='fas fa-calendar' />}
        />
        {ReactDOM.createPortal(datePickerRenderer, document.body)}
      </Fragment>
    )
  }
}
