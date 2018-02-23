import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class AppHeader extends PureComponent {
  static propTypes = {
    rightDisable: PropTypes.bool,
    leftDisable: PropTypes.bool,
    rightIcon: PropTypes.string,
    leftIcon: PropTypes.string,
    onClickRight: PropTypes.func,
    onClickLeft: PropTypes.func,
    title: PropTypes.string,
    subTitle: PropTypes.string
  }

  static defaultProps = {
    onClickLeft: () => console.log('Top Navigation Left action cliked'),
    onClickRight: () => console.log('Top Navigation right action cliked')
  }

  render () {
    const {
      title,
      subTitle,
      leftDisable,
      rightDisable,
      onClickLeft,
      onClickRight,
      leftIcon,
      rightIcon
    } = this.props

    return (
      <header className='app-header'>
        <div className='nav-left' onClick={onClickLeft}>
          {!leftDisable && <i className={leftIcon} />}
        </div>
        <div className='nav-title'>
          <div className='app-title'>{title}</div><span>{subTitle}</span>
        </div>
        <div className='nav-right' onClick={onClickRight}>
          {!rightDisable && <i className={rightIcon} />}
        </div>
      </header>
    )
  }
}
