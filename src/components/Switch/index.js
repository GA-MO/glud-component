import React, { PureComponent } from 'react'
// import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class Switch extends PureComponent {
  static propTypes = {
    testKey: PropTypes.string,
    onlyContain: PropTypes.bool,
    label: PropTypes.string,
    checked: PropTypes.bool,
    /**
     * Return (isChecked)
     */
    onToggle: PropTypes.func
  }

  static defaultProps = {
    testKey: 'switch',
    label: 'checkbox',
    checked: false,
    onToggle: (isChecked) => null
  }

  state = {
    isChecked: this.props.checked
  }

  handleCheckboxChange = () => {
    const { onToggle } = this.props
    this.setState((prevState) => ({ isChecked: !prevState.isChecked }))
    onToggle(!this.state.isChecked)
  }

  render () {
    const { isChecked } = this.state
    const { testKey, label, onlyContain } = this.props

    const switchItem = (
      <div className='switch'>
        <input
          data-test={testKey}
          type='checkbox'
          className='cbx'
          checked={isChecked}
          readOnly='readOnly'
          onClick={this.handleCheckboxChange}
        />
        <label className='ui-switch' />
      </div>
    )

    if (onlyContain) return switchItem

    return (
      <div className='field'>
        {label && <label className='label'>{label}</label>}
        {switchItem}
      </div>
    )
  }
}
