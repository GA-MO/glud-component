import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import { AppContainer } from 'react-hot-loader'
import 'react-daterange-picker/dist/css/react-calendar.css'
import './css/style.scss'

const rootEl = document.getElementById('app')
render(<Root />, rootEl)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRootApp = require('./containers/Root').default

    render(
      <AppContainer>
        <NextRootApp />
      </AppContainer>,
      rootEl
    )
  })
}
