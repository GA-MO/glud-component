// import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'

const NavigationContainer = props => {
  return <Style>{props.children}</Style>
}

NavigationContainer.propTypes = {}

NavigationContainer.defaultProps = {}

export default NavigationContainer

const Style = styled('div')`
  label: NavigationContainer;

  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
