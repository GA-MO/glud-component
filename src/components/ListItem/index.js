import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class ListItem extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    desc: PropTypes.string,
    icon: PropTypes.string,
    arrow: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    arrow: false,
    onClick: () => null
  }

  handleClickMenu = () => {
    const { onClick } = this.props
    onClick()
  }

  render () {
    const { label, desc, icon, arrow } = this.props

    const menuClass = classNames('list-view-item', {
      'has-arrow': arrow
    })

    return (
      <div className={menuClass} onClick={this.handleClickMenu}>
        {icon && <div className='logo'><img src={icon} /></div>}
        <div className='box-text'>
          <div className='is-6'>{label}</div>
          <span className='is-size-7 has-text-grey'>{desc}</span>
        </div>
        {arrow && <i className='fas fa-chevron-right' />}
      </div>
    )
  }
}
