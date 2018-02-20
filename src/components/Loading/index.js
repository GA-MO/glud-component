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
        <div className='loading'>
          {label}
        </div>
      </div>
    )
  }
}

function createElemetReactLoading (properties) {
  document.body.children[0].classList.add('react-loading')
  const divTarget = document.createElement('div')
  divTarget.id = 'box-react-loading'
  document.body.appendChild(divTarget)
  render(<Loading {...properties} />, divTarget)
}

function openLoading (properties) {
  closeLoading()
  createElemetReactLoading(properties)
}

function closeLoading () {
  if (document.body.children[0].classList.contains('react-loading')) {
    const target = document.getElementById('box-react-loading')
    target.parentNode.removeChild(target)
    const root = document.body.children[0]
    root.classList.remove('react-loading')
  }
}

export default {
  open: openLoading,
  close: closeLoading
}
