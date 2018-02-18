import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Checkbox extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.shape(),
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    /**
     * Return (isChecked, value)
     */
    onChange: PropTypes.func
  }

  static defaultProps = {
    label: 'checkbox',
    value: {},
    checked: false,
    onChange: (isChecked, value) => null
  }

  state = {
    isChecked: this.props.checked
  }

  handleCheckboxChange = () => {
    const { onChange, value } = this.props
    this.setState(prevState => ({ isChecked: !prevState.isChecked }))
    onChange(!this.state.isChecked, value)
  }

  render () {
    const { isChecked } = this.state
    const { label, value, disabled } = this.props
    const classes = classNames('is-checkradio is-primary', {
      'has-background-color': isChecked
    })

    return (
      <span>
        <input
          className={classes}
          type='checkbox'
          value={value}
          checked={isChecked}
          readOnly='readOnly'
          disabled={disabled}
        />
        <label onClick={disabled ? null : this.handleCheckboxChange}>
          {label}
        </label>
      </span>
    )
  }
}
