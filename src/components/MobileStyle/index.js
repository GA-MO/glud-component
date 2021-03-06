import React from 'react'
import { Global, css } from '@emotion/core'

const globalStyles = css`
  html {
    background: #f5f5f5;
    overflow: hidden;
  }
  body {
    background: #f5f5f5;
    overflow-y: hidden;
    color: #4a4a4a;
    display: flex;
    flex-direction: column;
  }
  #app,
  #root {
    height: calc(${window.innerHeight * 0.01}px * 100);
    flex-grow: 1;
    flex-direction: column;
    display: flex;
  }
  .tabs.is-fullwidth li {
    background: #fff;
  }
`

export default props => <Global styles={globalStyles} />
