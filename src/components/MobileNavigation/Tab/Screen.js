import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'

const Screen = props => {
  const { navigation, component } = props

  const propsToComponent = {
    navigation
  }

  return <Style>{component(propsToComponent)}</Style>
}

Screen.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired
}

Screen.defaultProps = {}

export default Screen

const Style = styled.div`
  label: TabScreen;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;

  > div {
    flex-grow: 1;
    overflow: auto;
  }
`
