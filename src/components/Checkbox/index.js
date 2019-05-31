import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Checkbox extends PureComponent {
  static propTypes = {
    testID: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string, PropTypes.number]).isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    /**
     * Return (isChecked, value)
     */
    onChange: PropTypes.func
  }

  static defaultProps = {
    testID: 'checkox',
    label: 'checkbox',
    value: {},
    checked: false,
    onChange: (isChecked, value) => null
  }

  state = {
    isChecked: this.props.checked
  }

  componentWillReceiveProps = nextProps => {
    if (this.state.checked !== nextProps.checked) {
      this.setState(() => ({
        isChecked: nextProps.checked
      }))
    }
  }

  handleCheckboxChange = () => {
    const { onChange, value } = this.props
    this.setState(prevState => ({ isChecked: !prevState.isChecked }))
    onChange(!this.state.isChecked, value)
  }

  render () {
    const { isChecked } = this.state
    const { testID, name, label, value, disabled } = this.props
    const classes = classNames('is-checkradio is-primary', {
      'has-background-color': isChecked
    })

    return (
      <span>
        <input
          data-test-id={testID}
          name={name}
          className={classes}
          type='checkbox'
          value={value}
          checked={isChecked}
          readOnly='readOnly'
          disabled={disabled}
        />
        <label onClick={disabled ? null : this.handleCheckboxChange}>{label}</label>
      </span>
    )
  }
}
