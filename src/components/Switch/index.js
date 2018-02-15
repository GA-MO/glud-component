import React, { PureComponent } from 'react'
// import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class Switch extends PureComponent {
  static propTypes = {
    onlyContain: PropTypes.bool,
    label: PropTypes.string,
    checked: PropTypes.bool,
    /**
     * Return (isChecked)
     */
    onToggle: PropTypes.func
  }

  static defaultProps = {
    label: 'checkbox',
    checked: false,
    onToggle: (isChecked) => null
  }

  state = {
    isChecked: this.props.checked
  }

  handleCheckboxChange = () => {
    const { onToggle } = this.props
    this.setState(prevState => ({ isChecked: !prevState.isChecked }))
    onToggle(!this.state.isChecked)
  }

  render () {
    const { isChecked } = this.state
    const { label, onlyContain } = this.props

    const switchItem = (
      <div className='switch'>
        <input
          type='checkbox'
          className='cbx'
          checked={isChecked}
          onClick={this.handleCheckboxChange}
        />
        <label className='lbl' />
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
