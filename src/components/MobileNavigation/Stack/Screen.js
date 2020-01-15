import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from '@emotion/styled'
import AppHeader from '../../AppHeader'

const Screen = props => {
  const { name, isMain, navigation, component, options } = props
  const [screenOptions, setScreenOption] = useState(options)
  const { headerDisabled, title, subTitle, rightIcon, rightAction, headerRenderer } = screenOptions
  const handleSetScreenOption = newOptions => {
    setScreenOption({ ...screenOptions, ...newOptions })
  }

  const propsToComponent = {
    initialScreen: props.params.screen || null,
    params: props.params,
    navigation: { ...navigation, setOptions: handleSetScreenOption }
  }

  const handleClickRightAction = () => {
    if (rightAction && typeof rightAction !== 'function') {
      console.error('rightAction should be a function')
      return null
    }

    rightAction()
  }

  const header = () => {
    if (headerRenderer) return headerRenderer(screenOptions)
    if (isMain) return null
    if (headerDisabled) return null

    return (
      <AppHeader
        title={title || name}
        subTitle={subTitle}
        leftDisable={isMain}
        leftIcon={'fas fa-arrow-left'}
        onClickLeft={() => navigation.goBack()}
        rightIcon={rightIcon}
        onClickRight={handleClickRightAction}
      />
    )
  }

  const renderComponent = () => {
    if (typeof component === 'function') return component(propsToComponent)
    const ComponentToRender = component
    return <ComponentToRender {...propsToComponent} />
  }

  return (
    <Style>
      {header()}
      {renderComponent()}
    </Style>
  )
}

Screen.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})]).isRequired,
  options: PropTypes.shape({})
}

Screen.defaultProps = {
  options: {}
}

export default Screen

const Style = styled.div`
  label: StackScreen;

  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  overflow: hidden;

  > .app-header {
    flex-shrink: 0;
  }

  > div {
    flex-grow: 1;
    overflow: auto;
  }
`
