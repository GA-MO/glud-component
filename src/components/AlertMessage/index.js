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

  render() {
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
          <div className='detail text-center'>
            {message}
          </div>
        </div>
      </div>
    )
  }
}

function createElemetReactAlert(properties) {
  document.body.children[0].classList.add('react-alert-message')
  const divTarget = document.createElement('div')
  divTarget.id = 'box-react-alert-message'
  document.body.appendChild(divTarget)
  render(<AlertMessage {...properties} />, divTarget)
}

function openAlertMessage(properties) {
  closeAlertMessage()
  createElemetReactAlert(properties)
}

function closeAlertMessage() {
  if (document.body.children[0].classList.contains('react-alert-message')) {
    const target = document.getElementById('box-react-alert-message')
    target.parentNode.removeChild(target)
    const root = document.body.children[0]
    root.classList.remove('react-alert-message')
  }
}

export default {
  open: openAlertMessage,
  close: closeAlertMessage
}
