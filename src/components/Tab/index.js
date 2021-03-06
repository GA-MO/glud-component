import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TabContent from './TabContent'
import TabItem from './TabItem'

class Tab extends PureComponent {
  static propTypes = {
    testID: PropTypes.string,
    className: PropTypes.string,
    defaultActive: PropTypes.number,
    centered: PropTypes.bool,
    right: PropTypes.bool,
    fullwidth: PropTypes.bool,
    fullwidthEqualSized: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    boxed: PropTypes.bool,
    /**
     * Return (tab, tabName)
     */
    onClick: PropTypes.func
  }

  static defaultProps = {
    testID: 'tab',
    defaultActive: 1,
    onClick: (tab, tabName) => null
  }

  state = {
    tabActive: 1
  }

  componentDidMount = () => {
    this.setState({
      tabActive: this.props.defaultActive
    })
  }

  onClickTab = ({ tab, name }) => {
    this.setState({
      tabActive: tab
    })
    this.props.onClick(tab, name)
  }

  render () {
    const { tabActive } = this.state
    const {
      testID,
      className,
      centered,
      right,
      fullwidth,
      fullwidthEqualSized,
      small,
      medium,
      large,
      boxed,
      children
    } = this.props

    const classes = classNames('tabs', {
      'is-centered': centered,
      'is-right': right,
      'is-fullwidth': fullwidth || fullwidthEqualSized,
      'is-small': small,
      'is-medium': medium,
      'is-large': large,
      'is-boxed': boxed,
      equal: fullwidthEqualSized
    })
    return (
      <div className={`box-tab ${className}`}>
        <div className={classes}>
          <ul>
            {React.Children.map(children, (child, index) => (
              <TabItem
                testID={testID}
                name={child.props.name}
                title={child.props.title}
                icon={child.props.icon}
                active={tabActive === index + 1}
                index={index}
                onClick={this.onClickTab}
              />
            ))}
          </ul>
        </div>
        {React.Children.map(children, (child, index) => {
          const isActive = tabActive === index + 1
          if (isActive && child.props.children) {
            return <TabContent>{child.props.children}</TabContent>
          }
          return null
        })}
      </div>
    )
  }
}

Tab.Item = TabItem

export default Tab
