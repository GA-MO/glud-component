import React, { PureComponent } from 'react'
// import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class Switch extends PureComponent {
  static propTypes = {
    testID: PropTypes.string,
    className: PropTypes.string,
    onlyContain: PropTypes.bool,
    label: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    /**
     * Return (isChecked)
     */
    onToggle: PropTypes.func
  }

  static defaultProps = {
    testID: 'switch',
    label: 'checkbox',
    checked: false,
    onToggle: isChecked => null
  }

  state = {
    isChecked: this.props.checked
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      isChecked: nextProps.checked
    })
  }

  handleCheckboxChange = () => {
    const { onToggle } = this.props
    this.setState(prevState => ({ isChecked: !prevState.isChecked }))
    onToggle(!this.state.isChecked)
  }

  render () {
    const { isChecked } = this.state
    const { testID, className, label, onlyContain, disabled } = this.props

    const switchItem = (
      <div className='switch'>
        <input
          data-test-id={testID}
          type='checkbox'
          className='cbx'
          checked={isChecked}
          readOnly='readOnly'
          disabled={disabled}
          onClick={this.handleCheckboxChange}
        />
        <label className='ui-switch' />
      </div>
    )

    if (onlyContain) return switchItem

    return (
      <div className={`field ${className}`}>
        {label && <label className='label'>{label}</label>}
        {switchItem}
      </div>
    )
  }
}
