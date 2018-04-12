import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'

class AlertMessage extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string,
    closeTime: PropTypes.number
  }

  componentDidMount = () => {
    const { closeTime } = this.props
    if (closeTime) {
      setTimeout(() => closeAlertMessage(), 1000 * closeTime)
    }
  }

  render () {
    const { type, message } = this.props
    return (
      <div className={type}>
        <div className='box-alert-message animated fadeInDown'>
          <a
            href='javascript:;'
            onClick={() => closeAlertMessage()}
            className='close'
          >
            <i className='fa fa-times-circle' aria-hidden='true' />
          </a>
          <div className='detail text-center'>{message}</div>
        </div>
      </div>
    )
  }
}

function createElemetReactAlert (properties) {
  const divTarget = document.createElement('div')
  divTarget.id = 'box-react-alert-message'
  document.body.appendChild(divTarget)

  render(<AlertMessage {...properties} />, divTarget)
}

function openAlertMessage (properties) {
  closeAlertMessage().then(() => {
    createElemetReactAlert(properties)
  })
}

function closeAlertMessage () {
  return new Promise((resolve) => {
    const target = document.getElementById('box-react-alert-message')
    if (!target) resolve()

    target.classList.add('alert-fade-out')

    const remove = () => {
      target.removeEventListener('webkitAnimationEnd', remove, false)
      target.removeEventListener('animationend', remove, false)
      target.parentNode.removeChild(target)
      resolve()
    }

    target.addEventListener('webkitAnimationEnd', remove, false)
    target.addEventListener('onclick', remove, false)
  })
}

export default {
  open: openAlertMessage,
  close: closeAlertMessage
}
