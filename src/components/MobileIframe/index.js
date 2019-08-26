import React from 'react'
import { render } from 'react-dom'
import Iframe from './Iframe'

function createElemet (properties) {
  const divTarget = document.createElement('div')
  divTarget.id = 'box-iframe'
  document.body.appendChild(divTarget)

  function onClose () {
    if (properties.onClose) {
      properties.onClose()
    }
    close()
  }

  render(<Iframe show title={properties.title} src={properties.src} onClose={onClose} />, divTarget)
}

function open (properties) {
  close().then(() => {
    createElemet(properties || {})
  })
}

function close () {
  return new Promise(resolve => {
    const target = document.getElementById('box-iframe')
    if (!target) resolve()

    target.parentNode.removeChild(target)
  })
}

export default {
  open: open,
  close: close
}
