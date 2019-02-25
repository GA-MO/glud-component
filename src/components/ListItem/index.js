import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class ListItem extends PureComponent {
  static propTypes = {
    testID: PropTypes.string,
    label: PropTypes.string,
    desc: PropTypes.string,
    icon: PropTypes.string,
    arrow: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    testID: 'item-list',
    arrow: false,
    onClick: () => null
  }

  handleClickMenu = () => {
    const { onClick } = this.props
    onClick()
  }

  render () {
    const { testID, label, desc, icon, arrow, children } = this.props

    const menuClass = classNames('list-view-item', {
      'has-arrow': arrow
    })

    return (
      <div
        data-test-id={testID}
        className={menuClass}
        onClick={this.handleClickMenu}
      >
        {icon && (
          <div className='logo'>
            <img src={icon} />
          </div>
        )}
        <div className='box-text'>
          {children}
          {!children && (
            <Fragment>
              <div className='is-6'>{label}</div>
              <span className='is-size-7 has-text-grey'>{desc}</span>
            </Fragment>
          )}
        </div>
        {arrow && <i className='fas fa-chevron-right' />}
      </div>
    )
  }
}
