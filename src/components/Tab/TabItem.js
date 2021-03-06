import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TabItem extends PureComponent {
  static propTypes = {
    testID: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    active: PropTypes.bool,
    index: PropTypes.number,
    onClick: PropTypes.func
  }

  render () {
    const { testID, name, title, icon, active, index, onClick } = this.props
    const classes = classnames('', {
      'is-active': active
    })

    return (
      <li
        data-test-id={`${testID}-${index}`}
        className={classes}
        onClick={() => onClick({ tab: index + 1, name: name })}
      >
        <a>
          {icon && (
            <span className='icon is-small'>
              <i className={icon} />
            </span>
          )}
          {title && <span>{title}</span>}
        </a>
      </li>
    )
  }
}
