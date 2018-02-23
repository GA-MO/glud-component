import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TabContent from './TabContent'
import TabItem from './TabItem'

class Tab extends PureComponent {
  static propTypes = {
    defaultActive: PropTypes.number,
    centered: PropTypes.bool,
    right: PropTypes.bool,
    fullwidth: PropTypes.bool
  }

  static defaultProps = {
    defaultActive: 1
  }

  state = {
    tabActive: 1
  }

  componentDidMount = () => {
    this.onClickTab(this.props.defaultActive)
  }

  onClickTab = tab => {
    this.setState({
      tabActive: tab
    })
  }

  render () {
    const { tabActive } = this.state
    const { centered, right, fullwidth, children } = this.props

    const classes = classNames('tabs', {
      'is-centered': centered,
      'is-right': right,
      'is-fullwidth': fullwidth
    })
    return (
      <div className='box-tab'>
        <div className={classes}>
          <ul>
            {React.Children.map(children, (child, index) => (
              <TabItem
                title={child.props.title}
                active={tabActive === index + 1}
                index={index}
                onClick={this.onClickTab}
              />
            ))}
          </ul>
        </div>
        {React.Children.map(children, (child, index) => {
          const isActive = tabActive === index + 1
          if (isActive) {
            return (
              <TabContent>
                {child.props.children}
              </TabContent>
            )
          }
          return null
        })}
      </div>
    )
  }
}

Tab.Item = TabItem

export default Tab
