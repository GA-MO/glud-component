import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class AppHeader extends PureComponent {
  static propTypes = {
    testID: PropTypes.string,
    className: PropTypes.string,
    rightDisable: PropTypes.bool,
    leftDisable: PropTypes.bool,
    rightIcon: PropTypes.string,
    leftIcon: PropTypes.string,
    onClickRight: PropTypes.func,
    onClickLeft: PropTypes.func,
    rightActions: PropTypes.shape({
      disabled: PropTypes.bool,
      icon: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    }),
    title: PropTypes.string,
    titleLeft: PropTypes.string,
    subTitle: PropTypes.string
  }

  static defaultProps = {
    onClickLeft: () => console.log('Top Navigation Left action cliked'),
    onClickRight: () => console.log('Top Navigation right action cliked'),
    leftActions: [],
    rightActions: [],
    testID: 'app-header'
  }

  navLeftRenderer = () => {
    const {
      leftDisable,
      onClickLeft,
      leftIcon,
      leftActions,
      testID
    } = this.props

    if (leftDisable) return null

    const shouldRenderBox = () => {
      if (!leftIcon && leftActions.length === 0) return true
      return false
    }

    if (shouldRenderBox()) return <div className='nav-left' />

    if (leftActions.length > 0) {
      return leftActions.map((nav, i) => (
        <div
          key={i}
          className={`nav-left ${nav.disabled && 'disabled'}`}
          data-test-id={`${testID}-nav-left-${i}`}
          onClick={() => !nav.disabled && nav.onClick()}
        >
          {!nav.disabled && <i className={nav.icon} />}
        </div>
      ))
    }

    return (
      <div
        className='nav-left'
        data-test-id={`${testID}-nav-left`}
        onClick={onClickLeft}
      >
        {leftIcon && <i className={leftIcon} />}
      </div>
    )
  }

  navRightRenderer = () => {
    const {
      rightDisable,
      onClickRight,
      rightIcon,
      rightActions,
      testID
    } = this.props

    if (rightDisable) return null

    const shouldRenderBox = () => {
      if (!rightIcon && rightActions.length === 0) return true
      return false
    }

    if (shouldRenderBox()) return <div className='nav-right' />

    if (rightActions.length > 0) {
      return rightActions.map((nav, i) => (
        <div
          key={i}
          className={`nav-right ${nav.disabled && 'disabled'}`}
          data-test-id={`${testID}-nav-right-${i}`}
          onClick={() => !nav.disabled && nav.onClick()}
        >
          {!nav.disabled && <i className={nav.icon} />}
        </div>
      ))
    }

    return (
      <div
        className='nav-right'
        data-test-id={`${testID}-nav-right`}
        onClick={onClickRight}
      >
        {rightIcon && <i className={rightIcon} />}
      </div>
    )
  }

  render () {
    const {
      className,
      title,
      subTitle,
      titleLeft
    } = this.props

    return (
      <header className={`app-header ${className}`}>
        {this.navLeftRenderer()}
        <div className={`nav-title ${titleLeft && 'left'}`}>
          <div className='app-title'>{title}</div>
          <span>{subTitle}</span>
        </div>
        {this.navRightRenderer()}
      </header>
    )
  }
}
