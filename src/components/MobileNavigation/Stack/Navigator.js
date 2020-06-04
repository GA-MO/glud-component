import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import get from 'lodash/get'
import { useTransition, animated } from 'react-spring/web.cjs'

const createStateBackup = () => {
  let state = {}
  return {
    watch: () => state,
    get: key => state[key],
    set: (key, value) => (state[key] = value)
  }
}

const stateBackup = createStateBackup()

const getKey = data => {
  return data.reduce((result, item) => `${result}.${item.props.name}`, 'Stack')
}

const Navigator = props => {
  const stackKey = getKey(props.children)
  const getDefaultScreen = ({ useBackup = true }) => {
    const statePrevios = stateBackup.get(stackKey)
    if (useBackup && statePrevios && statePrevios.length > 0) return statePrevios

    if (props.children.length === 0) return []

    if (props.initialScreen) {
      const initialScreenData = {
        name: props.initialScreen,
        params: {}
      }
      return [initialScreenData]
    }

    const firstScreen = get(props, 'children[0].props.name', null)
    if (firstScreen) {
      const screenData = {
        name: firstScreen,
        params: {}
      }
      return [screenData]
    }

    console.error('Please define screen name')
    return []
  }

  const [screenStack, setScreenStack] = useState(getDefaultScreen({ useBackup: true }))

  useEffect(() => {
    setScreenStack(getDefaultScreen({ useBackup: false }))
  }, [props.initialScreen])

  useEffect(() => {
    stateBackup.set(stackKey, screenStack)
  }, [screenStack, stackKey])

  const navigate = (screenName, params = {}) => {
    const isChildrenScreen = props.children.some(child => child.props.name === screenName)
    if (!isChildrenScreen) {
      console.error(`Screen (${screenName}) is not found in navigator`)
      return
    }

    const newScreen = { name: screenName, params }
    const isExisting = screenStack.some(screen => screen.name === screenName)

    const getPreviosScreens = () => {
      const previosScreens = []
      for (const screen of screenStack) {
        if (screen.name === screenName) {
          previosScreens.push(newScreen)
          break
        }
        previosScreens.push(screen)
      }

      return previosScreens
    }

    if (isExisting) {
      setScreenStack(getPreviosScreens())
    } else {
      setScreenStack([...screenStack, newScreen])
    }
  }

  const push = (screenName, params = {}) => {
    const isChildrenScreen = props.children.some(child => child.props.name === screenName)
    if (!isChildrenScreen) {
      console.error(`Screen (${screenName}) is not found in navigator`)
      return
    }

    const newScreen = { name: screenName, params }
    setScreenStack([...screenStack, newScreen])
  }

  const replace = index => (screenName, params = {}) => {
    const newScreen = { name: screenName, params }
    const newScreenStack = screenStack.filter((stack, i) => i !== index)
    setScreenStack([...newScreenStack, newScreen])
  }

  const goBack = index => () => {
    if (screenStack.length === 1) return

    const nextScreenStack = screenStack.filter((stack, i) => i !== index)
    setScreenStack(nextScreenStack)
  }

  const setParams = index => params => {
    const nextScreenStack = screenStack.map((stack, i) => {
      if (i === index) {
        return {
          ...stack,
          params: { ...stack.params, params }
        }
      }

      return stack
    })
    setScreenStack(nextScreenStack)
  }

  const reset = () => {
    stateBackup.set(stackKey, null)
    setScreenStack(getDefaultScreen())
  }

  const getScreen = screenName => {
    const screenToRender = props.children.find(child => child.props.name === screenName)
    if (screenToRender) return screenToRender
    console.error('Screen is undefined in stack')
    return null
  }

  const transitions = useTransition(screenStack, item => item.name, {
    from: item => {
      return {
        willChange: 'all',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        transform: screenStack.length === 1 ? 'translate3d(0%, 0, 0)' : 'translate3d(100%, 0, 0)',
        backgroundColor: '#fff',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)'
      }
    },
    update: item => {
      const isLastScreen = () => {
        const currentScreenName = screenStack[screenStack.length - 1].name
        if (screenStack.length === 1) return true
        if (item.name === currentScreenName) return true
        return false
      }

      if (isLastScreen()) {
        return {
          transform: 'translate3d(0%, 0, 0)'
        }
      }

      return {
        transform: 'translate3d(-10%, 0, 0)'
      }
    },
    enter: {
      transform: 'translate3d(0%, 0, 0)'
    },
    leave: {
      transform: 'translate3d(100%, 0, 0)'
    },
    config: { mass: 1, tension: 1000, friction: 70 }
  })

  return (
    <Style>
      {transitions.map(
        ({ item, key, props }, i) => {
          const screenToRender = getScreen(item.name)
          const navigationProps = {
            navigate,
            push,
            replace: replace(i),
            goBack: goBack(i),
            setParams: setParams(i),
            reset
          }
          const propsToInject = {
            key: item.name,
            isMain: i === 0,
            ...screenToRender.props,
            params: item.params,
            navigation: navigationProps
          }
          const screen = React.cloneElement(screenToRender, propsToInject)

          if (item) {
            return (
              <animated.div key={key} style={props}>
                {screen}
              </animated.div>
            )
          }

          return null
        }
      )}
    </Style>
  )
}

Navigator.propTypes = {
  initialScreen: PropTypes.string
}

Navigator.defaultProps = {
  initialScreen: null
}

export default Navigator

const Style = styled.div`
  label: StackNavigator;

  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`
