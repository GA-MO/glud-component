import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'

class Loading extends Component {
  static propTypes = {
    label: PropTypes.string
  }

  render () {
    const { label } = this.props
    return (
      <div className='box-loading open'>
        <div className='loading'>{label}</div>
      </div>
    )
  }
}

function createElemetReactLoading (properties) {
  const divTarget = document.createElement('div')
  divTarget.id = 'box-react-loading'
  document.body.appendChild(divTarget)

  render(<Loading {...properties} />, divTarget)
}

function openLoading (properties) {
  closeLoading().then(() => {
    createElemetReactLoading(properties)
  })
}

function closeLoading () {
  return new Promise((resolve) => {
    const target = document.getElementById('box-react-loading')
    if (!target) resolve()

    target.classList.add('loading-fade-out')

    const remove = () => {
      // target.removeEventListener('webkitAnimationEnd', remove, false)
      // target.removeEventListener('animationend', remove, false)
      target.parentNode.removeChild(target)
      const targetOther = document.getElementById('box-react-loading')
      if (!targetOther) resolve()
      closeLoading()
    }

    remove()

    // target.addEventListener('webkitAnimationEnd', remove, false)
    // target.addEventListener('onclick', remove, false)
  })
}

export default {
  open: openLoading,
  close: closeLoading
}
