import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from '@emotion/styled'
import findIndex from 'lodash/findIndex'
import Tab from '../../Tab'

const Stack = props => {
  const getDefaultScreen = () => {
    if (props.children.length === 0) {
      console.error('Please add Tab Screen')
    }

    if (props.initialScreen) return props.initialScreen

    return props.children[0].props.name
  }

  const [tabActive, setTabActive] = useState(getDefaultScreen())

  const handleClickTab = (tabIndex, tabName) => {
    setTabActive(tabName)
  }

  const renderScreenActive = () => {
    const screen = props.children.find(child => child.props.name === tabActive)
    return React.cloneElement(screen, { key: Date.now(), ...screen.props })
  }

  const getTabIndex = () => {
    return findIndex(props.children, child => child.props.name === tabActive) + 1
  }

  return (
    <Style>
      {renderScreenActive()}
      <Tab defaultActive={getTabIndex()} onClick={handleClickTab} fullwidthEqualSized>
        {props.children.map((child, i) => (
          <Tab.Item key={i} {...child.props} />
        ))}
      </Tab>
    </Style>
  )
}

Stack.propTypes = {
  initialScreen: PropTypes.string  // eslint-disable-line
}

Stack.defaultProps = {
  initialScreen: null
}

export default Stack

const Style = styled.div`
  label: TabNavigator;

  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;

  > .box-tab {
    position: relative;
    box-shadow: 0 -1px 2px rgba(10, 10, 10, 0.1);

    > .tabs {
      font-size: 0.75rem;

      a {
        flex-direction: column;
        > .icon {
          margin: 0;
        }
      }
    }
  }
`
